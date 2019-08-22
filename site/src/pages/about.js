import React from "react"

import Layout from "../components/layout"
import SocialFeed from "../components/SocialFeed"
import SEO from "../components/seo"
import { Container, Row, Col  } from 'reactstrap';
const About = () => (
  <Layout>
    <SEO title="About" />
    <Container>
        <Row>
          <Col>
            <h1>Title here</h1>  
            <p>lorem ipsum tasty pancake yyunlorem ipsum tasty pancake yyunlorem ipsum tasty pancake yyunlorem ipsum tasty pancake yyunlorem ipsum tasty pancake yyunlorem ipsum tasty pancake yyun</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1>Title here</h1>  
            <p>lorem ipsum tasty pancake yyunlorem ipsum tasty pancake yyunlorem ipsum tasty pancake yyunlorem ipsum tasty pancake yyunlorem ipsum tasty pancake yyunlorem ipsum tasty pancake yyun</p>
          </Col>
        </Row>
      </Container>
      <SocialFeed></SocialFeed>
  </Layout>
)

export default About
