import React from 'react'
import * as styles from './home-choose-your-location.module.css'
import { StaticImage } from "gatsby-plugin-image"

const HomeChooseYourLocation = ({ title, content }) => (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
      <h1 className={`content ${styles.heading}`}>Choose Your Location</h1>
      {content && (
        <div className={styles.text}>Family law disputes don't have to be a mountain to climb. We’re experts in family law. We help guide you on your path to resolution and your new future with minimal drama.</div>
      )}
      <div className={styles.homeCTABoxesRow}>
        <div>
          <div className={styles.locationSubHeading}>How Our Toowoomba Family Lawyers Work</div>
          <p>You have spent a lot of time and energy forging a path for your family and don’t want to jeopardise all of that despite where you might find yourself now. At the heart of who we are and how our lawyers work is the need to protect you and your children for now and the future, and to honour what it is that you have worked so hard to build without compromising that through unnecessary conflict.</p>
          <p>The well-being of your children and your future financial security demand a lawyer who knows everything about divorce law so that you don’t have to compromise on what that future looks like now.</p>
          <div className={styles.locationSubHeading}>Our Family Lawyers at Your Service</div>
          <p>Our Toowoomba family lawyers will guide you on what you need to accomplish, discuss your capacity in terms of time, money and emotional readiness, and determine how we can tailor our services in a way that you have us on your bench ready to be called in whenever you need us.</p>
        <p>Together we will craft a more meaningful outcome for your future. With support from a cultivated network of financial advisors, accountants, and therapists where it is needed, as well as through our relationships with fellow legal practitioners to achieve that outcome in the best possible way for you. </p>
      
        </div>


        </div>
      <div className={styles.buttonContainer}>
        <a href="/" className={styles.btnPrimary}>Contact BWB</a>   
      </div>
      </div>
      </div>
)

export default HomeChooseYourLocation