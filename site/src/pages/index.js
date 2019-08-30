import React from 'react'
import { graphql } from 'gatsby'
// import PropTypes from 'prop-types';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

import NavigationHome from '../components/navigationhome'
import SocialFeed from '../components/socialfeed'
import Footer from '../components/footer'

const IndexPage = ({ data }) => (
  <div style={{padding: '0'}}>
    <NavigationHome></NavigationHome>
    <div className="mx-auto text-center">    
      <section style={{ backgroundImage: `url(http://food.baycrews.co.jp/flippers-pancake.jp/images/main.jpg)`, backgroundSize: 'cover' , height: '5em', height: '100vh',   marginTop: '-180px'}}>
      </section>
    </div>

    <Container>
      <Row>
        <Col>
          <h1 className="font-weight-bold">TITLE HERE</h1>  
          <p>{data.allStrapiHomedescriptions.edges[0].node.description_body} </p>
        </Col>
        <Col>
          <img src={data.allStrapiHomedescriptionimages.edges[0].node.image.publicURL} alt="beautiful" />
        </Col>
      </Row>
    
    
    <div className="col-md-12" style={{ borderTop: '5px solid yellow' , margin: '2em'}}></div>
    </Container>
    <Jumbotron className="vh-50" fluid style={{ backgroundImage: `url(http://food.baycrews.co.jp/flippers-pancake.jp/images/main.jpg)`, backgroundSize: 'cover' , height: '5em'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-center">
            <h1 className="font-weight-bold">HEADLINE LOOK</h1>
            <div className="col-md-12" style={{ borderTop: '5px solid yellow' , margin: '2em'}}></div>
          </div>
        </div>
       </div> 
    </Jumbotron>
    <Container>
      
      <SocialFeed></SocialFeed>
    </Container>
    <Footer></Footer>
  </div>
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
