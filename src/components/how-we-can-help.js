import React from 'react'
import * as styles from './how-we-can-help.module.css'
import { StaticImage } from "gatsby-plugin-image"

const HowWeCanHelp = ({ title, content }) => (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
      <h1 className={`content ${styles.heading}`}>How We Can Help You
& Your Family</h1>
      {content && (
        <div className={styles.text}>We’re experts in family law. We will guide you on your journey to resolution and your family’s new future.</div>
      )}
      <div className={styles.homeCTABoxesRow}>
        <div className={styles.homeCTABoxes}>
          <div className={styles.homeCTABoxesInner}>
            <div className={styles.IconTextContainer}>
              <div className={styles.IconImage}>
              <StaticImage src="../images/path-icon1.jpg" alt="Separation" />
              </div>
              <div className={styles.IconText}>
              Separation
              </div>
            </div> 
          </div>
        </div>
        <div className={styles.homeCTABoxes}>
          <div className={styles.homeCTABoxesInner}>
            <div className={styles.IconTextContainer}>
              <div className={styles.IconImage}>
              <StaticImage src="../images/path-icon-arrow.jpg" alt="arrow" />
              </div>
            </div> 
          </div>
        </div>
        <div className={styles.homeCTABoxes}>
          <div className={styles.homeCTABoxesInner}>
            <div className={styles.IconTextContainer}>
              <div className={styles.IconImage}>
              <StaticImage src="../images/path-icon2.jpg" alt="Property Settlement" />
              </div>
              <div className={styles.IconText}>
              Property Settlement
              </div>
            </div> 
          </div>
        </div>
        <div className={styles.homeCTABoxes}>
          <div className={styles.homeCTABoxesInner}>
            <div className={styles.IconTextContainer}>
            <div className={styles.IconImage}>
              <StaticImage src="../images/path-icon-arrow.jpg" alt="arrow" />
              </div>
            </div> 
          </div>
        </div>
        <div className={styles.homeCTABoxes}>
          <div className={styles.homeCTABoxesInner}>
            <div className={styles.IconTextContainer}>
              <div className={styles.IconImage}>
              <StaticImage src="../images/path-icon3.jpg" alt="Parenting Matters" />
              </div>
              <div className={styles.IconText}>
              Parenting Matters
              </div>
            </div> 
          </div>
        </div>
        <div className={styles.homeCTABoxes}>
          <div className={styles.homeCTABoxesInner}>
            <div className={styles.IconTextContainer}>
            <div className={styles.IconImage}>
              <StaticImage src="../images/path-icon-arrow.jpg" alt="arrow" />
              </div>
            </div> 
          </div>
        </div>
        <div className={styles.homeCTABoxes}>
          <div className={styles.homeCTABoxesInner}>
            <div className={styles.IconTextContainer}>
              <div className={styles.IconImage}>
              <StaticImage src="../images/path-icon4.jpg" alt="Children's Issues" />
              </div>
              <div className={styles.IconText}>
              Children's Issues
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <a href="/" className={styles.btnPrimary}>Choose your pathway</a>   
      </div>
      </div>
      </div>
)

export default HowWeCanHelp