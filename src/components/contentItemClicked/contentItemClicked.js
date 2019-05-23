import React, { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';

import styles from "./contentItemClicked.module.css";

const ContentItemClicked = (props) => {
  const defaultBGStyle = {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    background: 'black',
    opacity: .5,
    cursor: 'zoom-out',
    transition: 'opacity .5s',
    zIndex: 9,
  }

  const bgTransitionStyles = {
    entering: {
      opacity: 0
    },
    entered: {
      opacity: .5
    },
    exiting: {
      opacity: .5
    },
    exited: {
      opacity: 0
    }
  }
  
  const defaultItemStyle = {
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
    opacity: 1,
    transition: 'all .5s',
    zIndex: 10
  };

  const itemTransitionStyles = {
    entering: { 
      height: props.content.itemRect.height,
      top: props.content.itemRect.top,
      left: props.content.itemRect.left,
      paddingRight: '35%',
      opacity: 1
    },
    entered:  { 
      height: '90vh',
      top: '5vh',
      left: '50%',
      paddingRight: '90%',
      transform: 'translateX(-50%)', 
      opacity: 1
    },
    exiting:  { 
      height: '90vh',
      top: '5vh',
      left: '50%',
      paddingRight: '90%',
      transform: 'translateX(-50%)',
      opacity: 1 
    },
    exited:  { 
      height: props.content.itemRect.height,
      top: props.content.itemRect.top,
      left: props.content.itemRect.left,
      paddingRight: '35%',
      opacity: 1
    }
  };

  const itemRef = useRef(null);

  const [inProp, setInProp] = useState(true);

  const handleBackgroundClick = () => {
    setInProp(false);
  }

  const handleTransitionEnd = (node, end) => {
    if (inProp) {

    } else {
      if (node) {
        node.addEventListener('transitionend', end, false);
      }
    }
  }

  return (
      <Transition appear in={inProp} timeout={0} addEndListener={() => {handleTransitionEnd(itemRef.current, props.handleClose)}}>
        {state => (
          <div>
            <div style={{...defaultBGStyle, ...bgTransitionStyles[state]}} onClick={handleBackgroundClick}></div>
            <div ref={itemRef} style={{...defaultItemStyle, ...itemTransitionStyles[state]}}>
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
        )}
      </Transition>
  );
};

export default ContentItemClicked;

