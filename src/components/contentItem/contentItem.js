import React from 'react';

import styles from "./contentItem.module.css";

const ContentItem = (props) => {

  return (
    <div className={styles.item} onClick={props.handleClick}>{props.content}</div>
  );
};

export default ContentItem;
