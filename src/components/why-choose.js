import React from 'react'
import * as styles from './why-choose.module.css'
import { StaticImage } from "gatsby-plugin-image"

const WhyChoose = ({ title, content }) => (

      <div className={styles.container}>
      <h1 className={`content ${styles.homeCTAHeading}`}>Why Choose<br/>Best Wilson Buckley</h1>
      {content && (
        <div className={styles.homeCTAText}>We’re experts in family law. We will guide you on your journey to resolution and your family’s new future.</div>
      )}
      <div className={styles.homeCTABoxesRow}>
        <div className={styles.homeCTABoxes}>
          <div className={styles.homeCTABoxesInner}>
            <div className={styles.IconTextContainer}>
              <div className={styles.accordionImage}>
              <StaticImage src="../images/why-choose-bwb.jpg" alt="Why Choose Best Wilson Buckley" />
              </div>
            </div> 
          </div>
        </div>
        <div className={styles.homeCTABoxes}>
          <div className={styles.homeCTABoxesInner}>
            <div className={styles.IconTextContainer}>
              <div className={styles.accordionImage}>
                <StaticImage src="../images/why-choose-bwb-accordion-placeholder.jpg" alt="Why Choose Best Wilson Buckley Accordion Placeholder" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <a href="/" className={styles.btnPrimary}>Learn more</a>   
      </div>
      </div>
)

export default WhyChoose