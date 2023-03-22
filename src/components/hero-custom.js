import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import * as styles from './hero.module.css'

const HeroCustom = ({ image, title, content }) => (
  <div className={styles.hero}>
    This is a test text content
  </div>
)

export default HeroCustom
