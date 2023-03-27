import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'
import ContactForm from './contact-form'
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
    <div className={styles.footerOuterContainer}>
      <div className={styles.container}>
        <div className={styles.footerHeadingContainer}>
          <div className={styles.footerHeading}>We can help you get through this!</div>
        </div>
        <div className={styles.footerFormContainer}>
          <StaticImage src="../images/footer-contact-form-placeholder.jpg" alt="Footer Contact Form Placeholder" />
        </div>
      </div> 
    </div>
)

export default Footer
