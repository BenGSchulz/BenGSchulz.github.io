import React from 'react';

import styles from "./contentItem.module.css";

const ContentItem = (props) => {

  return (
    <div className={styles.item} onClick={props.handleClick}>
      <h3>{props.content}</h3>
      <a href='/' className={[styles.link, styles.left].join(' ')}>Link 1</a>
      <a href='/' className={[styles.link, styles.right].join(' ')}>Link 2</a>
    </div>
  );
};

export default ContentItem;
