import React from "react"
import styles from "./resume.module.css"
import { FaFileDownload } from "react-icons/fa"

const Resume = props => {
  return (
    <div className={styles.container}>
      <a href="src/files/BenSchulzResume.pdf" download>
        <div className={styles.download}>
          <FaFileDownload />
        </div>
      </a>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>Education</div>
        <div className={styles.blockHeader}>
          <span>University of Denver</span>
          <span>Sep. 2015 - Mar. 2019</span>
        </div>
        <ul className={styles.educationBody}>
          <li>B.S. Computer Science - 3.9 GPA</li>
          <li>Minors: Emergent Digital Practices, Mathematics</li>
          <li>Deans List and Hornbeck Scholar</li>
          <li>Outstanding First year Writing Award</li>
        </ul>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>Experience</div>
        <div className={styles.blockHeader}>
          <span>
            Software Developer - <a href="http://spotpost.com">Spotpost</a>
          </span>
          <span>Feb. 2019 - current</span>
        </div>
        Denver, CO / Remote
        <ul className={styles.experienceBody}>
          <li>B.S. Computer Science - 3.9 GPA</li>
          <li>Minors: Emergent Digital Practices, Mathematics</li>
          <li>Deans List and Hornbeck Scholar</li>
        </ul>
        <div className={styles.blockHeader}>
          <span>
            Creative Coding Elective Teacher - <i>DSST Public Schools</i>
          </span>
          <span>Aug. - Nov. 2018</span>
        </div>
        Denver, CO
        <ul className={styles.experienceBody}>
          <li>
            Designed and organized a trimester curriculum centered around
            creative coding using OpenProcessing/p5.js :{" "}
            <a href="openprocessing.org/class/58336">
              openprocessing.org/class/58336
            </a>
          </li>
          <li>
            Cultivated interest in my passion to use coding for creative
            expression and human-computer interaction.
          </li>
          <li>
            Evolved interpersonal and leadership skills through instruction and
            collaboration with 38 students, grades 9 - 11.
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>Skills</div>
        <div className={styles.skillHeader} />
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>Activities</div>
        <div className={styles.blockHeader}>
          <span>Treasurer - Japan Bunka Kai</span>
          <span>Sep. 2016 - Mar. 2019</span>
        </div>
      </div>
    </div>
  )
}

export default Resume
