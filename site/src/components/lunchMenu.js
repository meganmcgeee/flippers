import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"
import { Col, Row } from 'reactstrap'

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
      <Row>
        {data.allStrapiLunchmenus.edges.map(document => (
          <Col key={document.node.id}>
            <h2>
            {console.log(document)}
            <Link to={`/${document.node.id}`}>{document.node.dish}</Link>
            </h2>
            <p>{document.node.description}</p>
            <p>{document.node.price}</p>
          </Col>
           ))}
          <Col>.col</Col>
        </Row>

    </>
    
  )
}

export default lunchMenu