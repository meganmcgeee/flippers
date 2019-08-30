import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// library.add(faFacebook);
// import topLogo from 'assets/images/topLogo.png'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{ margin: '0'}}>
          <Navbar color="dark" light expand="md">
          <NavbarBrand href="/"><img src={ require("../assets/images/Flippers_White_600px.png") }  alt="Logo" style={{ width: '300px'}}></img></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink className="text-light font-weight-bold" href="/">HOME</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-light font-weight-bold" href="/about/">ABOUT</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-light font-weight-bold" href="/menu">MENU</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-light font-weight-bold" href="/locations">LOCATIONS</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-light font-weight-bold" href="/contact">CONTACT</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light font-weight-bold" href="http://www.facebook.com/flippersnyc/">FACEBOOK</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light font-weight-bold" href="http://www.instagram.com/flippersus ">INSTAGRAM</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}

NavbarToggler.propTypes = {
    type: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
  }