import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"

import * as styles from './hero-custom.module.css'

const HeroCustom = ({ image, title, content, buttonlabel, buttonlink }) => (
    <div className={styles.container}>
      <div>
      {image && (
        <GatsbyImage className={styles.image} alt={title} image={image} />
      )}
      </div>
      <div>
        <h1 className={styles.heroCustomMinervaBold}>{title}</h1>
        {content && (
        <div className={styles.heroCustomMinerva}>{content}</div>
      )}
        <Link to={buttonlink} activeClassName="herolink">{buttonlabel}</Link>
        <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
      </div>
      
    </div>
)

export default HeroCustom