import { Link } from "gatsby"
import React from "react"

import Typist from "react-typist"

import styles from "./sidebar.module.css"

const Sidebar = () => (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>I'm</h2>
        <h1>Benjamin Schulz:</h1>
        <h2>
          <Typist avgTypingDelay={100} stdTypingDelay={0} cursor={{show: false}}>
            developer...
          </Typist>
        </h2>
      </div>
      
      <div className={styles.buttons}>
        <Link className={[styles.btn, styles.btnActive].join(' ')} to="/">| Projects</Link>
        <Link className={styles.btn} to="/">| Tech</Link>
        <Link className={styles.btn} to="/">| Resume</Link>
        <Link className={styles.btn} to="/">| Contact</Link>
      </div>
    </div>
)

export default Sidebar
