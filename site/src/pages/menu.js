import React from "react"
import LunchMenu from "../components/lunchMenu"
import DinnerMenu from "../components/dinnerMenu"
import MenuImageBanner from "../components/menuImageBanner"
import SEO from "../components/seo"
import Layout from '../components/layout'

const Menu = ({ data }) => (
  <Layout>
    <SEO title="Flippers Menu" />
    <LunchMenu></LunchMenu>
    <MenuImageBanner></MenuImageBanner>
    <DinnerMenu></DinnerMenu>
  </Layout>
)

export default Menu

