import React, { useState } from "react"
import styles from "./textLooper.module.css"

import TextLoop from "react-text-loop"

const TextLooper = props => {
  const [hovering, setHovering] = useState(false)

  let UA = navigator.userAgent
  let hasTouchScreen =
    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)

  const handleHover = e => {
    if (hasTouchScreen) {
      hovering
        ? e.target.classList.remove(styles.mobileHover)
        : e.target.classList.add(styles.mobileHover)
    }
    setHovering(!hovering)
  }

  if (hasTouchScreen) {
    return (
      <span className={styles.mobileWrapper} onClick={handleHover}>
        {hovering ? (
          <TextLoop interval={props.speed} adjustingSpeed={0} mask>
            {props.children}
          </TextLoop>
        ) : (
          props.title
        )}
        {/* <TextLoop interval={props.speed} adjustingSpeed={0} mask>
        {hovering ? props.children : props.title}
      </TextLoop> */}
      </span>
    )
  } else {
    return (
      <span
        className={styles.wrapper}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {hovering ? (
          <TextLoop interval={props.speed} adjustingSpeed={0} mask>
            {props.children}
          </TextLoop>
        ) : (
          props.title
        )}
        {/* <TextLoop interval={props.speed} adjustingSpeed={0} mask>
        {hovering ? props.children : props.title}
      </TextLoop> */}
      </span>
    )
  }
}

export default TextLooper
