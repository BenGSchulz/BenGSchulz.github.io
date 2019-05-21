import React from 'react';

import styles from "./contentItem.module.css";

const ContentItem = (props) => {

  return (
    <div className={styles.item} onClick={props.handleClick}>
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
