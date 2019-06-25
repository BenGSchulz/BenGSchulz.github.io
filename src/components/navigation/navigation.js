import React, { useState, useEffect } from "react"
import throttle from 'lodash.throttle'

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
      if (boundingRect.y <= 0) {
        setCurrentSectionId(el.id);
        return true;
      } else {
        return false;
      }
    });
  };
  
  const throttledScroll = throttle(handleScroll, 100);
  
  useEffect(() => {
    contentElements.push(document.getElementById('Resume'),
                          document.getElementById('About'),
                          document.getElementById('Projects'));

    window.addEventListener('wheel', throttledScroll);

    return () => {
      window.removeEventListener('wheel', throttledScroll);
    };
  }, [contentElements]);

  return (
    <div>
      <Header currentSection={currentSectionId} handleNavClick={handleNavClick}/>
      {/* <span className={styles.toTopBtn} onClick={() => {handleNavClick('Projects');}}><FaChevronUp /></span> */}
    </div>
  );
}

export default Navigation