import React, { useRef } from 'react';

import styles from "./projectCard.module.css";

const ProjectCard = (props) => {

  const myClass = (props.clicked ? [styles.card, styles.cardClicked].join(' ') : styles.card)

  const thisRef = useRef(null);

  const handleClick = () => {
    if (thisRef.current) {
      let thisCard = {
        ...props.content,
        cardRect: thisRef.current.getBoundingClientRect()
      }
      // let cardRect = thisRef.current.getBoundingClientRect();
      // console.log(thisCard.cardRect);
      props.handleClick(thisCard, props.index);
    } 
  }

  return (
    <div ref={thisRef} className={myClass} onClick={handleClick}>
      <h3 className={styles.cardTitle}>{props.content.title}</h3>
      <a 
        href={props.content.link1} 
        className={[styles.link, styles.left].join(' ')} 
        onClick={(e) => {e.stopPropagation()}}
        target='_blank' 
        rel='noopener noreferrer'
      >Link 1</a>
      <a 
        href={props.content.link2} 
        className={[styles.link, styles.right].join(' ')} 
        onClick={(e) => {e.stopPropagation()}}
        target='_blank' 
        rel='noopener noreferrer'
      >Link 2</a>
    </div>
  );
};

export default ProjectCard;
