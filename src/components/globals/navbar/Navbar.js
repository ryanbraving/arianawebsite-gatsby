import React, { Component } from "react";
import NavbarHeader from "./NavbarHeader";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";
import styled from "styled-components";
import { styles } from "../../../utils";

export default class Navbar extends Component {
  state = {
    navbarOpen: false
  };

  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen };
    });
  };

  render() {
    return (
      <NavbWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
        <NavbarIcons />
      </NavbWrapper>
    );
  }
}

const NavbWrapper = styled.nav`
  -webkit-box-shadow: -1px 9px 35px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 9px 35px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 9px 35px 0px rgba(0, 0, 0, 0.75);
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
  padding: 0.3rem 2rem;
  position: fixed;
  z-index: 1030;
  background-color: ${styles.colors.mainWhite};
  min-width: 100vw;
`;
