import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

import styles from "./contentItemClicked.module.css";

const ContentItemClicked = (props) => {

  const [inProp, setInProp] = useState(true);

  const defaultStyle = {
    position: 'fixed',
    border: '1px solid #f2f2f2',
    borderRadius: 5, 
    background: '#101213',
    textAlign: 'center',
    userSelect: 'none',
    boxSizing: 'border-box',
    width: 0,
    height: '90vh',
    top: '5vh',
    left: '50%',
    paddingRight: '50%',
    transform: 'translateX(-50%)',
    transition: 'all .5s',
    opacity: 1,
    zIndex: 10
  };

  const transitionStyles = {
    entering: { 
      opacity: 0,
      height: props.content.itemRect.height,
      top: props.content.itemRect.top,
      left: props.content.itemRect.left,
      paddingRight: 0,
    },
    entered:  { 
      opacity: 1,
      height: '90vh',
      top: '5vh',
      left: '50%',
      paddingRight: '90%', 
    },
    exiting:  { 
      opacity: 1,
      height: '90vh',
      top: '5vh',
      left: '50%',
      paddingRight: '90%', 
    },
    exited:  { 
      opacity: 0,
      height: props.content.itemRect.height,
      top: props.content.itemRect.top,
      left: props.content.itemRect.left,
      paddingRight: 0, 
    }
  };

  const handleBackgroundClick = () => {
    setInProp(false);
  }

  return (
    <div>
      <div className={styles.background} onClick={handleBackgroundClick}></div>
      <Transition appear in={inProp} timeout={{appear: 0, enter: 0, exit: 0}} onExited={props.handleClose}>
        {state => (
          <div style={{...defaultStyle, ...transitionStyles[state]}}>
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
        )}
        
      </Transition>
    </div>
  );
};

export default ContentItemClicked;
