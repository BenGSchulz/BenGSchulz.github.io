import React from "react"

import styles from "./content.module.css"

import AutoResponsive from "autoresponsive-react"

const getAutoResponsiveProps = () => {
  return {
    itemMargin: 10,
    containerWidth: document.parentElement.clientWidth,
    itemClassName: 'item',
    gridWidth: 100,
    transitionDuration: '.5'
  };
}

const Content = () => (
    <div className={styles.container}>
      {/* <AutoResponsive {...getAutoResponsiveProps}>
        <div className='item'>Item 1</div>
      </AutoResponsive> */}
      This is Content
    </div>
)

export default Content