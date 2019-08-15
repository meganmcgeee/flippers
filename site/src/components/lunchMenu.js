import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "./layout"
import SEO from "../components/seo"


const lunchMenu = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <h1>Lunch</h1>
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
   
 </Layout>
)

export default lunchMenu

export const pageQuery = graphql`  
  query menuQuery {
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
