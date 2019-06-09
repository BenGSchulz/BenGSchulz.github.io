import React from "react"

// import Typist from "react-typist"

import styles from "./header.module.css"

const Header = (props) => (
  <div className={styles.container}>
    <div className={styles.name}>Benjamin Schulz:</div>
    <div className={styles.section}>{props.currentSection}</div>
  </div>
);

export default Header