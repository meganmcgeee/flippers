import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
<footer style={{ paddingTop: '0',marginLeft: '0', marginRight: '0' }} className="bg-dark">
    <div className="row" style={{ paddingTop: '0 !important'}}>
        <div className="col text-center" style={{ paddingTop: '0 !important'}}>
        <img className="navbar-logo navbar-logo-light" src={ require("../assets/images/Flippers_White_600px.png") }  alt="Logo"></img>
        <p>Flipper's, Copyright 2019</p>
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
