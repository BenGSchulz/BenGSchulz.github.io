import React from 'react';

import styles from "./contentItem.module.css";

const ContentItem = (props) => {

  return (
    <div className={styles.item} onClick={props.handleClick}><h3>{props.content}</h3></div>
  );
};

export default ContentItem;
