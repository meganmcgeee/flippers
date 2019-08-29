import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"
import { Container, Col, Row } from  'reactstrap'

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
      <Container style={{ margin: '3em'}}>
        <h1 className="font-weight-bold text-uppercase" >Lunch</h1>
        <div className="col-md-12" style={{ borderTop: '5px solid yellow', paddingBottom: '2em'}}></div>
          {data.allStrapiLunchmenus.edges.map(document => (
            
            <Row key={document.node.id}>
              <Col>
                <h3 className="font-weight-bold text-uppercase" to={`/${document.node.id}`}>{document.node.dish}</h3><br></br>
                {document.node.dishdescription}
              </Col>
              <Col>${document.node.dishprice}</Col>
              <Col>
              <img src={ require("../assets/images/forkleft.png") }  alt="Logo"></img>
              </Col>
              <Col>
                <h3 className="font-weight-bold text-uppercase" to={`/${document.node.id}`}>{document.node.dish}</h3><br></br>
                {document.node.dishdescription}
              </Col>
              <Col>${document.node.dishprice}</Col>
            </Row>
          ))}
        </Container>
    </>
  )
}

export default lunchMenu