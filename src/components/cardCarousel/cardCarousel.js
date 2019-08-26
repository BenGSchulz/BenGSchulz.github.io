import React, { useState, useCallback, useRef, useEffect } from "react"
import styles from "./cardCarousel.module.css"
import ProjectCard from "../projectCard/projectCard"
import DetailedProjectCard from "../detailedProjectCard/detailedProjectCard"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"

let hoverInterval = null
let scrollAmount = 30
let UA = ""

const CardCarousel = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              link1
              link2
              previewImage
            }
            html
          }
        }
      }
    }
  `)

  const [clickedCardIndex, setClickedCardIndex] = useState(-1)
  const [showDetailCard, setShowDetailCard] = useState(false)
  const [detailData, setDetailData] = useState(null)
  const [hasTouchScreen, setHasTouchScreen] = useState(false)

  const container = useRef(null)
  const leftScroller = useRef(null)
  const rightScroller = useRef(null)

  useEffect(() => {
    UA = navigator.userAgent
    setHasTouchScreen(
      /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
    )

    if (!hasTouchScreen) {
      leftScroller.current.addEventListener(
        "wheel",
        e => {
          e.preventDefault()
          e.stopPropagation()
        },
        { passive: true }
      )
      rightScroller.current.addEventListener(
        "wheel",
        e => {
          e.preventDefault()
          e.stopPropagation()
        },
        { passive: true }
      )

      return () => {
        leftScroller.current.removeEventListener(
          "wheel",
          e => {
            e.preventDefault()
            e.stopPropagation()
          },
          { passive: true }
        )
        rightScroller.current.removeEventListener(
          "wheel",
          e => {
            e.preventDefault()
            e.stopPropagation()
          },
          { passive: true }
        )
      }
    }
  }, [])

  const handleCardClick = useCallback((inData, cardIndex) => {
    setClickedCardIndex(cardIndex)
    setDetailData(inData)
    setShowDetailCard(true)
  }, [])

  const handleDetailCardClose = useCallback(() => {
    setClickedCardIndex(-1)
    setShowDetailCard(false)
  }, [])

  const scrollLeft = () => {
    container.current.scrollLeft -= scrollAmount
  }

  const scrollRight = () => {
    container.current.scrollLeft += scrollAmount
  }

  const handleLeftHover = () => {
    hoverInterval = setInterval(scrollLeft, 50)
  }

  const handleRightHover = () => {
    hoverInterval = setInterval(scrollRight, 50)
  }

  const handleMouseLeave = () => {
    clearInterval(hoverInterval)
  }

  const handleMouseDown = () => {
    scrollAmount = 100
  }

  const handleMouseUp = () => {
    scrollAmount = 30
  }

  return (
    <div>
      {!hasTouchScreen && (
        <React.Fragment>
          <div
            ref={leftScroller}
            className={`${styles.scroller} ${styles.left}`}
            onMouseEnter={handleLeftHover}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            <FaChevronLeft />
          </div>
          <div
            ref={rightScroller}
            className={`${styles.scroller} ${styles.right}`}
            onMouseEnter={handleRightHover}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            <FaChevronRight />
          </div>
        </React.Fragment>
      )}
      <div ref={container} className={styles.container}>
        {data.allMarkdownRemark.edges.map(({ node }, i) => {
          let clicked = i === clickedCardIndex ? true : false
          return (
            <ProjectCard
              key={node.id}
              index={i}
              content={node}
              clicked={clicked}
              handleClick={handleCardClick}
            />
          )
        })}

        {showDetailCard && (
          <DetailedProjectCard
            content={detailData}
            handleClose={handleDetailCardClose}
          />
        )}
      </div>
    </div>
  )
}

export default CardCarousel
