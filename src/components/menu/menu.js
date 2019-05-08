import { Link } from "gatsby"
import React from "react"

import styles from "./menu.module.css"

const Menu = () => (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <ul>
          <li><Link className={[styles.btn, styles.btnActive].join(' ')} to="/">| Projects</Link></li>
          <li><Link className={styles.btn} to="/">| Tech</Link></li>
          <li><Link className={styles.btn} to="/">| Resume</Link></li>
          <li><Link className={styles.btn} to="/">| Contact</Link></li>
        </ul>
      </div>
    </div>
)

export default Menu
