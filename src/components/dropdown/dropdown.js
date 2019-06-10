import React, { useState } from "react"
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

import styles from "./dropdown.module.css"

const Dropdown = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={[props.css, styles.wrapper].join(' ')} onClick={() => {setCollapsed(!collapsed)}}>
      {props.currentSelection}
      {collapsed ? 
        <FaChevronDown className={styles.icon}/>
      :
        <FaChevronUp className={styles.icon}/>
      }
    </div>
  );
}

export default Dropdown