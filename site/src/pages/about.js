import React from 'react'

import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SocialFeed from "../components/SocialFeed"
import SEO from "../components/seo"
import { Container, Row, Col  } from 'reactstrap';
const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <Container>
        <Row>
          <Col>
            <h1>Title here</h1>  
            <p>{data.allStrapiAbouttexts.edges[0].node.textblock1}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1>Title here</h1>  
            <p>{data.allStrapiAbouttexts.edges[0].node.textblock2}</p>
          </Col>
        </Row>
      </Container>
      <SocialFeed></SocialFeed>
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
