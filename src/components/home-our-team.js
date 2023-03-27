import React from 'react'
import * as styles from './home-our-team.module.css'
import { StaticImage } from "gatsby-plugin-image"

const HomeOurTeam = ({ title, content }) => (

      <div className={styles.container}>
      <h1 className={`content ${styles.homeCTAHeading}`}>Our Team</h1>
      {content && (
        <div className={styles.homeCTAText}>We’re experts in family law. We’re also quite simply, a collective of unique humans that connect with you on a personal level, at a personal time, to guide you on your bespoke, specialised, holistic path to resolution and your new future.</div>
      )}
      <div className={styles.homeCTABoxesRow}>
        <div className={styles.homeCTABoxes}>
          <div className={styles.homeCTABoxesInner}>
            <div className={styles.IconTextContainer}>
              <div className={styles.accordionImage}>
              <StaticImage src="../images/home-our-team-placeholder.jpg" alt="Our Team Placeholder" />
              </div>
            </div> 
          </div>
        </div>
      </div>
      </div>
)

export default HomeOurTeam