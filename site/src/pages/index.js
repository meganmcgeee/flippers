import React from 'react'
import { Link, graphql } from 'gatsby'
// import { Jumbotron, Button } from 'react-bootstrap';
import Layout from '../components/layout'
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiLunchmenus.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.dish}</Link>
          </h2>
          <p>{document.node.dishdescription}</p>
        </li>
      ))}
    </ul>
    {/* https://www.gatsbyjs.org/packages/gatsby-image/ */}
    <Img fixed={data.file.childImageSharp.fixed} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiLunchmenus {
      edges {
        node {
          id
          dish
          dishdescription
        }
      }
    }
  }`
