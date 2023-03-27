import React from 'react'
import * as styles from './all-things-we-can-help.module.css'
import { StaticImage } from "gatsby-plugin-image"

const AllThingsWeCanHelp = ({ title, content }) => (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
      <h1 className={`content ${styles.heading}`}>All the Things We Can<br/>Help With!</h1>
      {content && (
        <div className={styles.text}>We’re experts in family law. We will guide you on your journey to resolution and your family’s new future.</div>
      )}
      <div className={styles.homeCTABoxesRow}>
        <div className={styles.homeCTABoxes}>
          <div className={styles.homeCTABoxesInner}>
            <div className={styles.IconTextContainer}>
              <div className={styles.IconImage}>
              <StaticImage src="../images/categories-graphic.jpg" alt="Categories" />
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <a href="/" className={styles.btnPrimary}>Show all categories</a>   
      </div>
      </div>
      </div>
)

export default AllThingsWeCanHelp