import React from 'react'

import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>
      {data.allStrapiAbouttexts.edges[0].node.textblock1}
    </p>
    <p>
      {data.allStrapiAbouttexts.edges[0].node.textblock2}
    </p>
  </Layout>
)

export default About

export const aboutPageQuery = graphql`  
  query AboutQuery {
    allStrapiAbouttexts {
      edges {
        node {
          textblock1
          textblock2
        }
      }
    }
  }`
