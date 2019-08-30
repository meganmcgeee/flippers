import React from "react"

import Layout from "../components/layout"
import SocialFeed from "../components/SocialFeed"
import SEO from "../components/seo"
import { Container, Row, Col, Button  } from 'reactstrap';

const Locations = () => (
  <Layout>
    <SEO title="Locations" />
      <Row style={{ paddingTop: '3em'}}>
        <Col>
          <h1 className="font-weight-bold text-uppercase">NEW YORK</h1>
          <div className="col-md-6" style={{ borderTop: '5px solid yellow' }}></div>
          </Col>
        </Row>
        <Row>
          <Col>
          <img className="navbar-logo navbar-logo-light" src={ require("../assets/images/map.png") }  alt="Logo"></img>
          </Col>
          <Col>
          <h2>337 W Broadway</h2>
          <h2>New York, NY 10013</h2>
          <img src={ require("../assets/images/yelp.png") }  alt="yelp"></img><br></br>
          <Button className="btn btn-dark btn-lg" href="/menus">SEE  MENU</Button>
          </Col>
        </Row>
    <SocialFeed></SocialFeed>
  </Layout>
)

export default Locations
