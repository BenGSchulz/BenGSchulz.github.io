import React, { useState, useCallback, useRef } from "react"
import styles from "./contentArea.module.css"
import ProjectCard from '../projectCard/projectCard';
import DetailedProjectCard from '../detailedProjectCard/detailedProjectCard';

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const data = {
  title: 'Test Title',
  link1: 'https://github.com/BenGSchulz',
  link2: 'https://linkedin.com/in/BenGSchulz'
}

const ContentArea = (props) => {

  const projectsRef = useRef(null);

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

  const handleProjectsWheel = useCallback((e) => {

    if (e.deltaY < 0) {
      if (projectsRef.current.scrollLeft > 0) {
        projectsRef.current.scrollLeft -= 150;
        // e.preventDefault();
        e.stopPropagation();
      }
    } else {
      if (projectsRef.current.scrollLeft < projectsRef.current.scrollWidth) {
        projectsRef.current.scrollLeft += 150;
        // e.preventDefault();
        e.stopPropagation();
      }
    }
  },[]);

  return (
    <div className={styles.container}>
      <div id='Projects' ref={projectsRef} className={styles.projectSection} onWheel={(e) => {handleProjectsWheel(e)}}>
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