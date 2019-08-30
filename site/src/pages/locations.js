import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col  } from 'reactstrap';

const Locations = () => (
  <Layout>
    <SEO title="Locations" />
    <Container>
      <Row>
        <Col>
         <h1>Locations</h1>
         <p>here lie img</p>
        </Col>
        <Col>
        <h2>New York</h2>
        <p>555 Beautiful St.</p>
        </Col>
      </Row>
    </Container>
    <h1>Locations</h1>
    <p>all locational it</p>
  </Layout>
)

export default Locations
