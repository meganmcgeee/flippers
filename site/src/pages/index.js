import React from 'react'
import { Link, graphql } from 'gatsby'
// import { Jumbotron, Button } from 'react-bootstrap';
import Layout from '../components/layout'
// import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <img src={data.allStrapiHomedescriptionimages.edges[0].node.image.publicURL} />
    <p>
      {data.allStrapiHomedescriptions.edges[0].node.description_body}
    </p>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiHomedescriptions {
      edges {
        node {
          description_body
        }
      }
    }
    allStrapiHomedescriptionimages {
      edges {
        node {
          image {
            publicURL
          }
        }
      }
    }
  }`
