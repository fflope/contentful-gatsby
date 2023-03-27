import React from 'react'
import * as styles from './home-testimonials-slider.module.css'
import { StaticImage } from "gatsby-plugin-image"

const HomeTestimonialsSlider = ({ title, content }) => (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
      {content && (
        <div className={styles.testimonialsText}>Family law disputes don't have to be a mountain to climb. We’re experts in family law. We help guide you on your path to resolution and your new future with minimal drama.</div>
      )}
      <div className={styles.testimonialsNameText}>Megan Sandlewood</div>
      </div>
      </div>
)

export default HomeTestimonialsSlider