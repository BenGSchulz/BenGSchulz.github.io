import React, { useEffect } from "react"
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import throttle from 'lodash.throttle';
import styles from "./menu.module.css"



const handleNavClick = (selector) => {
  document.querySelector('#' + selector).scrollIntoView({ 
    behavior: 'smooth' 
  });
}

const throttledScroll = () => {
  console.log('scrolled');
}

const handleScroll = () => {
  throttle(throttledScroll, 100);
}

const Menu = () => {

  useEffect(() => {
    // window.addEventListener('scroll', throttle(handleScroll, 100));
    window.addEventListener('scroll', handleScroll);

    return () => {
      console.log('Returned');
      // window.removeEventListener('scroll', throttle(handleScroll, 100));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <ul>
          <li><div className={styles.btn} onClick={() => {handleNavClick('Projects');}}>Projects</div></li>
          <li><div className={styles.btn} onClick={() => {handleNavClick('Resume');}}>Resume</div></li>
          <li><div className={styles.btn} onClick={() => {handleNavClick('About');}}>About</div></li>
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
