import React from 'react';

import styles from "./contentItemClicked.module.css";

const ContentItemClicked = (props) => {

  return (
    <div>
      <div className={styles.background} onClick={props.handleBackgroundClick}></div>
      <div className={styles.item}>
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
    </div>
  );
};

export default ContentItemClicked;
