import React from 'react'
import { graphql } from 'gatsby'
import { Jumbotron, Container } from 'react-bootstrap';
import Layout from '../components/layout'
import bgimage from '../images/gatsby-astronaut.png'
// import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
     <Jumbotron fluid style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' , height: '5em'}}>
       
      </Jumbotron>
    <ul>
      {/* {data.allStrapiDinnermenus.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.dish}</Link>
          </h2>
          <p>{document.node.description}</p>
          <p>{document.node.price}</p>
        </li>
      ))} */}
      <footer>fixed</footer>
    </ul>
  </Layout>
)

export default IndexPage

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
