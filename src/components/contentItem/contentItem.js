import React, { useRef } from 'react';

import styles from "./contentItem.module.css";

const ContentItem = (props) => {

  const thisRef = useRef(null);

  const handleClick = () => {
    if (thisRef.current) {
      let thisItem = {
        ...props.content,
        itemRect: thisRef.current.getBoundingClientRect()
      }
      // let itemRect = thisRef.current.getBoundingClientRect();
      // console.log(thisItem);
      props.handleClick(thisItem);
    } 
  }

  return (
    <div ref={thisRef} className={styles.item} onClick={handleClick}>
      <h3>{props.content.title}</h3>
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

export default ContentItem;
