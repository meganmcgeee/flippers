import React from 'react'
import { graphql } from 'gatsby'
import { Jumbotron, Container, Row, Col  } from 'reactstrap';
import Layout from '../components/layout'
import bgimage from '../images/gatsby-astronaut.png'
// import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
<<<<<<< HEAD
    <Button>Hello I am button</Button>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {data.allStrapiHomedescriptions.edges[0].node.description_body}
    <img src={data.allStrapiHomedescriptionimages.edges[0].node.image.publicURL} />
    <Link to="/page-2/">Go to page 2</Link>
=======
     <Jumbotron fluid style={{ backgroundImage: `url(http://food.baycrews.co.jp/flippers-pancake.jp/images/main.jpg)`, backgroundSize: 'cover' , height: '5em'}}></Jumbotron>
     <Container>
        <Row>
          <Col>
            <h1>Title here</h1>  
            <p>lorem ipsum tasty pancake yyunlorem ipsum tasty pancake yyunlorem ipsum tasty pancake yyunlorem ipsum tasty pancake yyunlorem ipsum tasty pancake yyunlorem ipsum tasty pancake yyun</p>
          </Col>
          <Col>
            <img /> 
            <p>hi</p>
          </Col>
        </Row>
      </Container>
      <Jumbotron fluid style={{ backgroundImage: `url(http://food.baycrews.co.jp/flippers-pancake.jp/images/main.jpg)`, backgroundSize: 'cover' , height: '5em'}}></Jumbotron>
>>>>>>> tmp
  </Layout>
)

export default IndexPage

<<<<<<< HEAD
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
=======
// export const pageQuery = graphql`  
//   query IndexQuery {
//     allStrapiDinnermenus {
//       edges {
//         node {
//           id
//           dish
//           description
//           price
//         }
//       }
//     }
//   }`
>>>>>>> tmp
