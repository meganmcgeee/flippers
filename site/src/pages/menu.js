import React from "react"
import lunchMenu from "../components/lunchMenu"
import dinnerMenu from "../components/dinnerMenu"
import SEO from "../components/seo"
import Layout from '../components/layout'

const Menu = () => (
  <Layout>
    <SEO title="Flippers Menu" />
    <lunchMenu></lunchMenu>
    <dinnerMenu></dinnerMenu>
  </Layout>
)

export default Menu
