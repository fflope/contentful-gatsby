import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import HeroCustom from '../components/hero-custom'
import HomeCta from '../components/home-cta'
import HowWeCanHelp from '../components/how-we-can-help'
import WhyChoose from '../components/why-choose'
import AllThingsWeCanHelp from '../components/all-things-we-can-help'
import HomeOurTeam from '../components/home-our-team'
import HomeChooseYourLocation from '../components/home-choose-your-location'
import HomeFamilyLawResources from '../components/home-family-law-resources'
import HomeTestimonialsSlider from '../components/home-testimonials-slider'


class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')
    const [herocustom] = get(this, 'props.data.allContentfulHeroCustom.nodes')
    return (
      <Layout location={this.props.location}>
        <HeroCustom
          image={herocustom.image.gatsbyImage}
          title={herocustom.heading}
          content={herocustom.subHeading}
          buttonlabel={herocustom.buttonLabel}
          buttonlink={herocustom.buttonLink}
        />
        <HomeCta
          title={herocustom.heading}
          content={herocustom.subHeading}
        />
        <HowWeCanHelp
          title={herocustom.heading}
          content={herocustom.subHeading}
        />
        <WhyChoose
          title={herocustom.heading}
          content={herocustom.subHeading}
        />
        <AllThingsWeCanHelp
          title={herocustom.heading}
          content={herocustom.subHeading}
        />
        <HomeOurTeam
          title={herocustom.heading}
          content={herocustom.subHeading}
        />
        <HomeChooseYourLocation
          title={herocustom.heading}
          content={herocustom.subHeading}
        />
        <HomeFamilyLawResources
          title={herocustom.heading}
          content={herocustom.subHeading}
        />
        <ArticlePreview posts={posts} />
        <HomeTestimonialsSlider
          title={herocustom.heading}
          content={herocustom.subHeading}
        />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "5BZbnBKV77Aj3wrC78OzGg" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        title
        heroImage: image {
          gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1180)
        }
      }
    }
    allContentfulHeroCustom(
      filter: { contentful_id: { eq: "58Rf9XKgbSu2HHGKPyyXpk" } }
    ) {
      nodes {
        heading
        subHeading
        buttonLink
        buttonLabel
        image: image {
          gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1180)
        }
      }
    }
  }
`
