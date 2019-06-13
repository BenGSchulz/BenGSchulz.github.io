import React, { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import { FaTimes } from 'react-icons/fa';

import styles from "./detailedProjectCard.module.css";

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
  zIndex: 1500,
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

const defaultCardStyle = {
  position: 'fixed',
  border: '1px solid #f2f2f2',
  borderRadius: 5, 
  background: '#101213',
  textAlign: 'center',
  userSelect: 'none',
  boxSizing: 'border-box',
  width: 0,
  height: '95vh',
  top: '5vh',
  left: '50%',
  paddingRight: '50%',
  opacity: 1,
  transition: 'all .5s',
  zIndex: 2000
};

let showConditional = false;

const DetailedProjectCard = (props) => {
  const cardRef = useRef(null);

  const [inProp, setInProp] = useState(true);

  const cardTransitionStyles = {
    entering: { 
      width: props.content.cardRect.width,
      height: props.content.cardRect.height,
      top: props.content.cardRect.top,
      left: props.content.cardRect.left,
      opacity: 0
    },
    entered:  { 
      height: '95vh',
      top: '2.5vh',
      left: '50%',
      paddingRight: '90%',
      transform: 'translateX(-50%)', 
      opacity: 1
    },
    exiting:  { 
      height: '95vh',
      top: '2.5vh',
      left: '50%',
      paddingRight: '90%',
      transform: 'translateX(-50%)',
      opacity: 1 
    },
    exited:  { 
      width: props.content.cardRect.width,
      height: props.content.cardRect.height,
      top: props.content.cardRect.top,
      left: props.content.cardRect.left,
      opacity: 0
    }
  };

  const handleBackgroundClick = () => {
    setInProp(false);
  }

  const handleTransitionEnd = (node, end) => {
    if (inProp) {
      showConditional = true;
    } else {
      if (node) {
        node.addEventListener('transitionend', end, false);
      }
    }
  }

  return (
      <Transition appear in={inProp} timeout={0} addEndListener={() => {handleTransitionEnd(cardRef.current, props.handleClose)}}>
        {state => (
          <div>
            <div style={{...defaultBGStyle, ...bgTransitionStyles[state]}} onClick={handleBackgroundClick}></div>
            <div ref={cardRef} style={{...defaultCardStyle, ...cardTransitionStyles[state]}}>
              <h3 className={styles.cardTitle}>{props.content.title}</h3>
              { showConditional ? (
                <div>
                <p className={styles.closeBtn} onClick={handleBackgroundClick}><FaTimes /></p> 
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
              )
              : null }
            </div>
          </div>
        )}
      </Transition>
  );
};

export default DetailedProjectCard;

