import React from "react"
import LunchMenu from "../components/lunchMenu"
import DinnerMenu from "../components/dinnerMenu"
import SEO from "../components/seo"
import Layout from '../components/layout'

const Menu = () => (
  <Layout>
    <SEO title="Flippers Menu" />
    <LunchMenu></LunchMenu>
    <DinnerMenu></DinnerMenu>
  </Layout>
)

export default Menu
