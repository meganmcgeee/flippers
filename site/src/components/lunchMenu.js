import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"

const lunchMenu = () => {
  const data = useStaticQuery(graphql`  
    query lunchMenuQuery {
      allStrapiLunchmenus {
        edges {
          node {
            id
            dish
            dishdescription
            dishprice
          }
        }
      }
    }`
  )

  return (
    <>
      <SEO title="Lunch" />
      <h1>Lunch</h1>
      <ul>
        {data.allStrapiLunchmenus.edges.map(document => (
          <li key={document.node.id}>
            <h2>
              <Link to={`/${document.node.id}`}>{document.node.dish}</Link>
            </h2>
            <p>{document.node.dishdescription}</p>
            <p>{document.node.dishprice}</p>
          </li>
        ))}
      </ul>

    </>
  )
}

export default lunchMenu