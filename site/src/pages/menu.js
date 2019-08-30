import React from "react"
import LunchMenu from "../components/lunchMenu"
import DinnerMenu from "../components/dinnerMenu"
import MenuImageBanner from "../components/menuImageBanner"
import SEO from "../components/seo"
import Layout from '../components/layout'
import Container from 'reactstrap'

const Menu = ({ data }) => (
  <Layout>
    <Container style={{ margin: '2em 1em 0'}}>
      <SEO title="Flipper's Menu" />
        <LunchMenu></LunchMenu>
        <MenuImageBanner></MenuImageBanner>
        <DinnerMenu></DinnerMenu>
      </Container>
  </Layout>
)

export default Menu

