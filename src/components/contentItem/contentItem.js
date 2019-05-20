import React, { useState, useRef } from 'react';

import styles from "./contentItem.module.css";

const ContentItem = (props) => {

  const [classState, setClassState] = useState(styles.item);

  const handleClick = () => {
    console.log('item clicked');
  }

  const handleBlur = () => {
    console.log('item blurred');
  }

  return (
    <div className={classState} onClick={handleClick} onBlur={handleBlur}>
      <h3>{props.content}</h3>
      <a href='/' className={[styles.link, styles.left].join(' ')}>Link 1</a>
      <a href='/' className={[styles.link, styles.right].join(' ')}>Link 2</a>
    </div>
  );
};

export default ContentItem;
