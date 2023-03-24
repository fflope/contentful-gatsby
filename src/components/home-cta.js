import React from 'react'

import Container from '../components/container'
import * as styles from './home-cta.module.css'

const HomeCta = ({ title, content }) => (

      <div className={styles.container}>
      <h1 className={`content ${styles.homeCTAHeading}`}>Let's Make this as Easy as Possible</h1>
      {content && (
        <div className={styles.homeCTAText}>Family law matters can be complex. Here are some things that you should know about Best Wilson Buckley.</div>
      )}
      <div className={styles.homeCTABoxesRow}>
        <div className={styles.homeCTABoxes}>
          <div className={styles.homeCTABoxesInner}>
            <p className={styles.InnerHeading}>Get Instant<br/>Answers Now</p>
            <p className={styles.InnerText}>We know that family law issues have a tendency to keep you awake at night. Get instant answers now with your own customised map up and down the family law mountain.</p>
            <div className={styles.IconText}>
              Use our amazing AI driven technology to give you customised legal advice
            </div>
          </div>
          <a href="/">START NOW</a>
        </div>
        <div className={styles.homeCTABoxes}>
          <div className={styles.homeCTABoxesInner}>
            <p className={styles.InnerHeading}>Get Instant<br/>Answers Now</p>
            <p className={styles.InnerText}>We know that family law issues have a tendency to keep you awake at night. Get instant answers now with your own customised map up and down the family law mountain.</p>
            <div className={styles.IconText}>
              Use our amazing AI driven technology to give you customised legal advice
            </div>
          </div>
          <a href="/">START NOW</a>
        </div>
        <div className={styles.homeCTABoxes}>
          <div className={styles.homeCTABoxesInner}>
            <p className={styles.InnerHeading}>Get Instant<br/>Answers Now</p>
            <p className={styles.InnerText}>We know that family law issues have a tendency to keep you awake at night. Get instant answers now with your own customised map up and down the family law mountain.</p>
            <div className={styles.IconText}>
              Use our amazing AI driven technology to give you customised legal advice
            </div>
          </div>
          <a href="/">START NOW</a>
        </div>
      </div>
      </div>
)

export default HomeCta