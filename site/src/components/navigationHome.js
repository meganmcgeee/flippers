import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import topLogo from 'assets/images/topLogo.png'
import '../assets/css/style.css';


export default class NavigationHome extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
//   let icon = (
//     <span class="logo">
//       <a href="/">
//         <img src="/awesome-logo.png" height="33" width="120" alt="text here" /></a>
//     </span>
//   );
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
          <Navbar className="navbar  bg-transparent navbar-inverse" light expand="md">
            <NavbarBrand href="/"><img className="navbar-logo navbar-logo-light" src={ require("../assets/images/Flippers_White_600px.png") }  alt="Logo"></img></NavbarBrand>
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