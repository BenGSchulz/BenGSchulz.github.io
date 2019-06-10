import React from "react"
import { FaGithub, FaLinkedin, FaPaperPlane} from 'react-icons/fa'
import Dropdown from '../../dropdown/dropdown'
import styles from "./header.module.css"

const Header = (props) => (
  <div className={styles.container}>
    <div className={styles.name}>Benjamin Schulz:</div>
    <Dropdown css={styles.drop} currentSelection={props.currentSection} />
    <ul>
      <li><a href='https://github.com/BenGSchulz' target='_blank' rel='noopener noreferrer' className={styles.social}><FaGithub /></a></li>
      <li><a href='https://linkedin.com/in/BenGSchulz/' target='_blank' rel='noopener noreferrer' className={styles.social}><FaLinkedin /></a></li>
      <li><a href='mailto:benjamin.g.schulz@gmail.com' className={styles.social}><FaPaperPlane /></a></li>
    </ul>
  </div>
);

export default Header