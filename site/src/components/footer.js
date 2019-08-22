import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
<footer class="bg-dark">
    <div class="container">
    <div class="row">
        <div class="col text-center">
            <img class="navbar-logo navbar-logo-light" src={ require("../assets/images/Flippers_White_600px.png") }  alt="Logo"></img>
        <p>Flippers, Copyright 2019</p>
        </div>
    </div>
    </div>
</footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
