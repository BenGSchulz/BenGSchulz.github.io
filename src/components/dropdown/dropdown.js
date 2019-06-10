import React, { useState } from "react"
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

import styles from "./dropdown.module.css"

const Dropdown = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      <span className={styles.sectionTitle} onClick={() => {setCollapsed(!collapsed)}}>{props.currentSelection}</span>
      {collapsed ? 
        <FaChevronDown className={styles.icon} />
      :
        <FaChevronUp className={styles.icon} />
      }

      {collapsed ? 
        null
      :
        <div className={styles.dropper}>
          <div className={styles.dropperItem} onClick={() => {props.handleNavClick('Projects'); setCollapsed(true);}}>Projects</div>
          <div className={styles.dropperItem} onClick={() => {props.handleNavClick('Resume'); setCollapsed(true);}}>Resume</div>
          <div className={styles.dropperItem} onClick={() => {props.handleNavClick('About'); setCollapsed(true);}}>About</div>
        </div>
      }
    </div>
  );
}

export default Dropdown