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
    <ul>
      {data.allStrapiDinnermenus.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.dish}</Link>
          </h2>
          <p>{document.node.description}</p>
          <p>{document.node.price}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiDinnermenus {
      edges {
        node {
          id
          dish
          description
          price
        }
      }
    }
  }`
