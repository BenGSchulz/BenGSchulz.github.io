import React, { useState } from "react"
import styles from "./textLooper.module.css"

import TextLoop from "react-text-loop"

const TextLooper = props => {
  const [hovering, setHovering] = useState(false)

  const handleHover = () => {
    setHovering(!hovering)
  }

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {hovering ? (
        <TextLoop interval={props.speed} adjustingSpeed={0} mask>
          {props.children}
        </TextLoop>
      ) : (
        props.title
      )}
      {/* <TextLoop interval={props.speed} adjustingSpeed={0} mask>
        {hovering ? props.children : props.title}
      </TextLoop> */}
    </span>
  )
}

export default TextLooper
