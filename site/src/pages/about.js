import React from 'react'

import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SocialFeed from "../components/SocialFeed"
import SEO from "../components/seo"
import { Container, Row, Col  } from 'reactstrap';
const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <Container style={{ margin: '3em'}}>
        <Row>
          <Col>
            <h1 className="font-weight-bold">WHAT IS FLIPPER'S?</h1>  
            <div className="col-md-12" style={{ borderTop: '5px solid yellow',paddingBottom: '3em' }}></div>
            <p>{data.allStrapiAbouttexts.edges[0].node.textblock1}</p>
            <div className="text-center" >
              <iframe width="560" height="315" src="https://www.youtube.com/embed/JxmVCXWQr9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
          </Col>
        </Row>
        <Row>
          <Col>
          <h1 className="font-weight-bold">WHAT ARE SOUFFLE PANCAKES?</h1>  
            <div className="col-md-12" style={{ borderTop: '5px solid yellow', paddingBottom: '3em'}}></div>
             <div className="text-center" style={{paddingBottom: '2em'}}>
                <h2 className="font-weight-bold">Lorem ipsum dolor sit amet,</h2>
                <h2 className="font-weight-bold">consectetuer adipiscing elit,</h2>
                <h2 className="font-weight-bold">sed diam nonummy.</h2>
              </div>
            <p>{data.allStrapiAbouttexts.edges[0].node.textblock2}</p>
          </Col>
        </Row>
        <div className="col-md-12 text-center">
          <img  src={ require("../assets/images/eggs.png") }  alt="eggs"></img>
        </div>
        <div className="col-md-12 text-center" style={{ borderTop: '5px solid yellow'}}></div>
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
