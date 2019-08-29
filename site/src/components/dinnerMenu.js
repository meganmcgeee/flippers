import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"
import { Container, Col, Row } from  'reactstrap'

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
      <Container style={{ margin: '3em'}}>
        <h1 className="font-weight-bold text-uppercase">Dinner</h1>
        <div className="col-md-12" style={{ borderTop: '5px solid yellow',paddingBottom: '3em' }}></div>
        <Col>
          {data.allStrapiDinnermenus.edges.map(document => (
            <Col key={document.node.id}>
              <h2>
                <Link to={`/${document.node.id}`}>{document.node.dish}</Link>
              </h2>
              <p>{document.node.description}</p>
              <p>{document.node.price}</p>
            </Col>
          ))}
        </Col>
        </Container>
    </>
  )
}

export default DinnerMenu

