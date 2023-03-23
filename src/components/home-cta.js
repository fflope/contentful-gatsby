import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { StaticImage } from 'gatsby-plugin-image'

import Container from '../components/container'
import * as styles from './hero-custom.module.css'

const HeroCustom = ({ image, title, content, buttonlabel, buttonlink }) => (
  <div className={styles.outerContainer}>
      <StaticImage alt="Unsplash image" className={styles.backgroundImage} style={{ position: "absolute" }} src="https://images.ctfassets.net/cdypw9nxi8dj/50cWH3Pk42Lp6K4GnLHKe/94e432d36f35029608fc328476ac4ba0/bwb-home-banner.jpg" />
      <div className={styles.container}>
      <h1 className={`content ${styles.heroCustomMinervaBold}`}>{title}</h1>
      {content && (
        <div className={styles.heroCustomMinerva}>{content}</div>
      )}
      <a href={buttonlink} className={styles.btnPrimary}>{buttonlabel}</a>
      </div>
    </div>
)

export default HeroCustom