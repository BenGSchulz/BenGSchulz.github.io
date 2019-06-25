import React, { useState, useCallback } from 'react'
import styles from './cardCarousel.module.css'
import ProjectCard from '../projectCard/projectCard'
import DetailedProjectCard from '../detailedProjectCard/detailedProjectCard'
const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const data = {
  title: 'Test Title',
  link1: 'https://github.com/BenGSchulz',
  link2: 'https://linkedin.com/in/BenGSchulz'
}

const CardCarousel = (props) => {

  const [clickedCardIndex, setClickedCardIndex] = useState(-1);
  const [showDetailCard, setShowDetailCard] = useState(false);
  const [detailData, setDetailData] = useState(data);

  const handleCardClick = useCallback((inData, cardIndex) => {
    setClickedCardIndex(cardIndex);
    setDetailData(inData);
    setShowDetailCard(true);
  }, []);

  const handleDetailCardClose = useCallback(() => {
    setClickedCardIndex(-1);
    setShowDetailCard(false);
  }, []);

  return (
    <div>
      {/* <div id='Projects' ref={projectsRef} className={styles.projectSection} onWheel={(e) => {handleProjectsWheel(e)}}> */}
      <div id='Projects' className={styles.container}>
        { cards.map(i => {
            let clicked = ((i === clickedCardIndex) ? true : false);
            return <ProjectCard 
                      key={i}
                      index={i}
                      content={data}
                      clicked={clicked} 
                      handleClick={handleCardClick} 
                    />;
            })
        }
        {
          (showDetailCard ? 
            <DetailedProjectCard 
              content={detailData} 
              handleClose={handleDetailCardClose}
            /> 
            : null)
        }
      </div>
    </div>
);
};

export default CardCarousel