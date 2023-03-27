import React from 'react'
import * as styles from './home-cta.module.css'
import { StaticImage } from "gatsby-plugin-image"

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
            <div className={styles.IconTextContainer}>
              <div className={styles.IconImage}>
              <StaticImage src="../images/icon-get-instant-answers.png" alt="Get Instant Answers Now" />
              </div>
              <div className={styles.IconText}>
                Use our amazing AI driven technology to give you customised legal advice
              </div>
            </div> 
          </div>
          <a href="/">START NOW</a>
        </div>
        <div className={styles.homeCTABoxes}>
          <div className={styles.homeCTABoxesInner}>
            <p className={styles.InnerHeading}>Early Resolution<br/>Focus</p>
            <p className={styles.InnerText}>At Best Wilson Buckley, we're early-resolution focused. The sooner you can resolve your family law dispute, the quicker you can get on with living your life.</p>
            <div className={styles.IconTextContainer}>
              <div className={styles.IconImage}>
                <StaticImage src="../images/icon-early-resolution-focus.png" alt="Early Resolution Focus" />
              </div>
              <div className={styles.IconText}>
              We know you have better things to do than spend your life with lawyers
              </div>
            </div>
          </div>
          <a href="/">MAKE AN APPOINTMENT</a>
        </div>
        <div className={styles.homeCTABoxes}>
          <div className={styles.homeCTABoxesInner}>
            <p className={styles.InnerHeading}>Get Fixed Fee<br/>Help</p>
            <p className={styles.InnerText}>At Best Wilson Buckley, you will never receive unexpected bills in the mail from us. You will know exactly of all the costs involved in helping you fix your family law matter efficiently.</p>
            <div className={styles.IconTextContainer}>
            <div className={styles.IconImage}>
                <StaticImage src="../images/icon-get-fixed-fee-help.png" alt="Get Fixed Fee Help" />
              </div>
              <div className={styles.IconText}>
              Don't get bill shock. Talk to us about our fixed fee legal help.
              </div>
            </div>
          </div>
          <a href="/">MAKE AN APPOINTMENT</a>
        </div>
      </div>
      </div>
)

export default HomeCta