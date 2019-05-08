import { Link } from "gatsby"
import React from "react"

import Typist from "react-typist"

import styles from "./header.module.css"

const Header = () => (
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
    </div>
)

export default Header