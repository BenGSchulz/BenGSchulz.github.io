import React, { useState, useEffect } from "react"
import { FaChevronUp } from 'react-icons/fa'
import throttle from 'lodash.throttle'

import styles from './navigation.module.css'
import Header from './header/header'

const contentElements = [];

const Navigation = () => {
  const [currentSectionId, setCurrentSectionId] = useState('Projects');

  const handleNavClick = (id) => {
    document.getElementById(id).scrollIntoView({ 
      behavior: 'smooth' 
    });
    setCurrentSectionId(id);
  }

  const handleScroll = () => {
    contentElements.some((el) => {
      const boundingRect = el.getBoundingClientRect();
      if ((boundingRect.y + boundingRect.height - (window.innerHeight / 2)) > 0) {
        setCurrentSectionId(el.id);
        return true;
      } else {
        return false;
      }
    });
  };
  
  const throttledScroll = throttle(handleScroll, 500);
  
  useEffect(() => {
    contentElements.push(document.getElementById('Projects'),
                        document.getElementById('Resume'),
                        document.getElementById('About'));

    window.addEventListener('wheel', throttledScroll);

    return () => {
      window.removeEventListener('wheel', throttledScroll);
    };
  }, [contentElements]);

  return (
    <div>
      <Header currentSection={currentSectionId} handleNavClick={handleNavClick}/>
      <p className={styles.toTopBtn} onClick={() => {handleNavClick('Projects');}}><FaChevronUp /></p>
    </div>
  );
}

export default Navigation