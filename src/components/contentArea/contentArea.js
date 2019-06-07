import React, { useState, useCallback, useRef } from "react"
// import { Transition } from 'react-transition-group';

import styles from "./contentArea.module.css"

import ContentItem from '../contentItem/contentItem';
import ContentItemClicked from '../contentItemClicked/contentItemClicked';

import { FaChevronUp } from 'react-icons/fa';

// const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const items = [0, 1, 2, 3];

const item = {
  title: 'Test Title',
  link1: 'https://github.com/BenGSchulz',
  link2: 'https://linkedin.com/in/BenGSchulz'
}

const ContentArea = (props) => {

  const projectsRef = useRef(null);
  const resumeRef = useRef(null);

  const [clickedIndex, setClickedIndex] = useState(-1);
  const [showDetailItem, setShowDetailItem] = useState(false);
  const [detailItem, setDetailItem] = useState(item);

  const handleItemClick = useCallback((inItem, itemIndex) => {
    setClickedIndex(itemIndex);
    setDetailItem(inItem);
    setShowDetailItem(true);
  }, []);

  const handleDetailItemClose = useCallback(() => {
    setClickedIndex(-1);
    setShowDetailItem(false);
  }, []);

  const handleScrollerClick = useCallback((e) => {
    if(projectsRef.current) {
      projectsRef.current.scrollIntoView({ 
        behavior: "smooth", 
        block: "nearest"
     });
    }
  })

  return (
    <div className={styles.container}>
      <h1 ref={projectsRef} className={styles.pageTitle} id='Projects'>My Projects</h1>
      { items.map(i => {
          let clicked = ((i === clickedIndex) ? true : false);
          return <ContentItem 
                    key={i}
                    index={i}
                    content={item}
                    clicked={clicked} 
                    handleClick={handleItemClick} 
                  />;
          })
      }
      <p className={styles.toTopBtn} onClick={(e) => {handleScrollerClick(e)}}><FaChevronUp /></p>
      {
        (showDetailItem ? 
          <ContentItemClicked 
            content={detailItem} 
            handleClose={handleDetailItemClose}
          /> 
          : null)
      }
      <h1 ref={resumeRef} className={styles.pageTitle} id='Resume'>My Resume</h1>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <h1 ref={resumeRef} className={styles.pageTitle} id='About'>About Me</h1>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  );
};

export default ContentArea
  // const transitionStyles = {
  //   entering: { opacity: 0 },
  //   entered:  { opacity: 1 },
  //   exiting:  { opacity: 1 },
  //   exited:  { opacity: 0 },
  // };
      // <Transition in={showDetailItem} timeout={500} appear unmountOnExit>
      //   {state => (
      //     <ContentItemClicked
      //       style={{...transitionStyles[state]}}
      //       content={detailItem} 
      //       handleBackgroundClick={handleBackgroundClick}
      //     />
      //   )}
      // </Transition>