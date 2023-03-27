import React from 'react'
import * as styles from './home-family-law-resources.module.css'
import { StaticImage } from "gatsby-plugin-image"

const HomeFamilyLawResources = ({ title, content }) => (

      <div className={styles.container}>
      <h1 className={`content ${styles.homeCTAHeading}`}>Family Law Resources</h1>
      {content && (
        <div className={styles.homeCTAText}>Family law disputes don't have to be a mountain to climb. We’re experts in family law. We help guide you on your path to resolution and your new future with minimal drama.</div>
      )}
      </div>
)

export default HomeFamilyLawResources