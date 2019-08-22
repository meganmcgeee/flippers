import React from 'react'
import { Link, graphql } from 'gatsby'
// import { Jumbotron, Button } from 'react-bootstrap';
import Layout from '../components/layout'
// import Img from "gatsby-image"

import { Button } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = ({ data }) => (
  <Layout>
    <Button>Hello I am button</Button>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {data.allStrapiHomedescriptions.edges[0].node.description_body}
    <img src={data.allStrapiHomedescriptionimages.edges[0].node.image.publicURL} />
    <Link to="/page-2/">Go to page 2</Link>
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
