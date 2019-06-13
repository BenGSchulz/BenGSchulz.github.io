import React, { useRef } from 'react';

import styles from "./projectCard.module.css";

const ProjectCard = (props) => {

  const myClass = (props.clicked ? [styles.item, styles.itemClicked].join(' ') : styles.item)

  const thisRef = useRef(null);

  const handleClick = () => {
    if (thisRef.current) {
      let thisItem = {
        ...props.content,
        itemRect: thisRef.current.getBoundingClientRect()
      }
      // let itemRect = thisRef.current.getBoundingClientRect();
      // console.log(thisItem.itemRect);
      props.handleClick(thisItem, props.index);
    } 
  }

  return (
    <div ref={thisRef} className={myClass} onClick={handleClick}>
      <h3 className={styles.itemTitle}>{props.content.title}</h3>
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
