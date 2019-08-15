import React from 'react'
import styles from './contentArea.module.css'
import CardCarousel from '../cardCarousel/cardCarousel'
import About from '../about/about'
import Resume from '../resume/resume'

const ContentArea = (props) => {
  return (
    <div id='ContentArea' className={styles.container}>
      <h1 id='About' className={styles.sectionTitle}>About</h1>
      <About />
      
      <h1 id='Projects' className={styles.sectionTitle}>Projects</h1>
      <CardCarousel />

      <h1 id='Resume' className={styles.sectionTitle}>Resume</h1>
      <Resume />
      
    </div>
  );
};

export default ContentArea