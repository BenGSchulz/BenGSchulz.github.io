import React, { useState, useEffect } from "react"
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import throttle from 'lodash.throttle'
import styles from "./menu.module.css"

const contentElements = [];
const navElements = [];

const Menu = () => {

  const [activeId, setActiveId] = useState('ProjectsNav');

  const handleNavClick = (id) => {
    document.getElementById(id).scrollIntoView({ 
      behavior: 'smooth' 
    });
    setActiveId(id + 'Nav');
  }

  const handleScroll = () => {
    contentElements.some((el) => {
      const boundingRect = el.getBoundingClientRect();
      if ((boundingRect.y + boundingRect.height) > 0) {
        setActiveId(el.id + 'Nav');
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
    // console.log(activeId);
    navElements.forEach(el => {
      if (el.id === activeId) {
        el.classList.add(styles.btnActive);
      } else {
        el.classList.remove(styles.btnActive);
      }
    });

    document.getElementById(activeId).classList.add(styles.btnActive);
  }, [activeId]);
  
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <ul>
          <li><div id='ProjectsNav' className={styles.btn} onClick={() => {handleNavClick('Projects');}}>Projects</div></li>
          <li><div id='ResumeNav' className={styles.btn} onClick={() => {handleNavClick('Resume');}}>Resume</div></li>
          <li><div id='AboutNav' className={styles.btn} onClick={() => {handleNavClick('About');}}>About</div></li>
          <br/>
          <br/>
          <br/>
          <li><a href='https://github.com/BenGSchulz' target='_blank' rel='noopener noreferrer' className={styles.social}><FaGithub /></a></li>
          <li><a href='https://linkedin.com/in/BenGSchulz/' target='_blank' rel='noopener noreferrer' className={styles.social}><FaLinkedin /></a></li>
          <li><a href='mailto:benjamin.g.schulz@gmail.com' className={styles.social}><FaPaperPlane /></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu
