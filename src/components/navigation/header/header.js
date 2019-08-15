import React from "react"
import { FaGithub, FaLinkedin, FaPaperPlane} from 'react-icons/fa'
import Dropdown from '../../dropdown/dropdown'
import styles from "./header.module.css"

const Header = (props) => (
  <div className={styles.container}>
    <div className={styles.name}>Ben Schulz:</div>
    <Dropdown 
      currentSelection={props.currentSection} 
      handleNavClick={props.handleNavClick}
      values={['About', 'Projects', 'Resume']}/>
    <div className={styles.socialGroup}>
      <a href='https://github.com/BenGSchulz' target='_blank' rel='noopener noreferrer' className={styles.social}><FaGithub /></a>
      <a href='https://linkedin.com/in/BenGSchulz/' target='_blank' rel='noopener noreferrer' className={styles.social}><FaLinkedin /></a>
      <a href='mailto:benjamin.g.schulz@gmail.com' className={styles.social}><FaPaperPlane /></a>
    </div>
  </div>
);

export default Header