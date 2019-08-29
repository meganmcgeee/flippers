import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
<footer className="bg-dark">
    <div className="container">
    <div className="row">
        <div className="col text-center">
            <img src={ require("../assets/images/Flippers_White_600px.png") }  alt="Logo"></img>
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
