import React from 'react'
import styles from './contentArea.module.css'
import CardCarousel from '../cardCarousel/cardCarousel'

const ContentArea = (props) => {
  return (
    <div className={styles.container}>
      <CardCarousel />
      
      <div id='About' style={{height: '100vh'}}>
        <h1 className={styles.sectionTitle}>About</h1>
      </div>

      <div id='Resume' style={{height: '100vh'}}>
        <h1 className={styles.sectionTitle}>Resume</h1>
      </div>
      
    </div>
  );
};

export default ContentArea