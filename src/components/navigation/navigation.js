import React, { useState, useEffect } from "react"
import throttle from 'lodash.throttle'

import Header from './header/header'
import Sidebar from './sidebar/sidebar'

import styles from './navigation.module.css'

const contentElements = [];
const navElements = [];

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
    navElements.push(document.getElementById('ProjectsNav'),
                        document.getElementById('ResumeNav'),
                        document.getElementById('AboutNav'));

    window.addEventListener('wheel', throttledScroll);

    return () => {
      window.removeEventListener('wheel', throttledScroll);
    };
  }, [contentElements, navElements]);

  useEffect(() => {
    navElements.forEach(el => {
      if (el.id === currentSectionId) {
        el.classList.add(styles.btnActive);
      } else {
        el.classList.remove(styles.btnActive);
      }
    });

    document.getElementById(currentSectionId + 'Nav').classList.add(styles.btnActive);
  }, [currentSectionId]);

  return (
    <div>
      <Header currentSection={currentSectionId} handleNavClick={handleNavClick}/>
      <Sidebar handleNavClick={handleNavClick}/>
    </div>
  );
}

export default Navigation