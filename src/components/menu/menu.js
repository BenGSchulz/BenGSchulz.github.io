import { Link } from "gatsby"
import React from "react"

import styles from "./menu.module.css"

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';

const Menu = () => (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <ul>
          <li><Link className={[styles.btn, styles.btnActive].join(' ')} to="/">Projects</Link></li>
          <li><Link className={styles.btn} to="/404">Tech</Link></li>
          <li><Link className={styles.btn} to="/">Resume</Link></li>
          <li><Link className={styles.btn} to="/">Contact</Link></li>
          <br/>
          <br/>
          <br/>
          <li><a href='https://github.com/BenGSchulz' target='_blank' rel='noopener noreferrer' className={styles.social}><FaGithub /></a></li>
          <li><a href='https://linkedin.com/in/BenGSchulz/' target='_blank' rel='noopener noreferrer' className={styles.social}><FaLinkedin /></a></li>
          <li><a href='mailto:benjamin.g.schulz@gmail.com' className={styles.social}><FaPaperPlane /></a></li>
        </ul>
      </div>
    </div>
)

export default Menu
