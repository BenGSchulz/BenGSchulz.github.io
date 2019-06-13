import React, { useState, useCallback } from "react"

import styles from "./contentArea.module.css"

import ProjectCard from '../projectCard/projectCard';
import DetailedProjectCard from '../detailedProjectCard/detailedProjectCard';

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const data = {
  title: 'Test Title',
  link1: 'https://github.com/BenGSchulz',
  link2: 'https://linkedin.com/in/BenGSchulz'
}

const ContentArea = (props) => {

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
    <div className={styles.container}>
      <div id='Projects' className={styles.projectSection}>
        {/* <h1 className={styles.sectionTitle}>Projects</h1> */}
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
      <div id='Resume' style={{height: '100vh'}}>
        <h1 className={styles.sectionTitle}>Resume</h1>
      </div>
      <div id='About' style={{height: '100vh'}}>
        <h1 className={styles.sectionTitle}>About</h1>
      </div>
    </div>
  );
};

export default ContentArea