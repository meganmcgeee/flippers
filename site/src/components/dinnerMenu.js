import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"
import { Col, Row } from 'reactstrap'


const DinnerMenu = () => {
  const data = useStaticQuery(graphql`  
    query dinnerMenuQuery {
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
  )

  return (
    <>
      <SEO title="Dinner" />
      <h1>Dinner</h1>
      <Row>
        {data.allStrapiDinnermenus.edges.map(document => (
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

export default DinnerMenu