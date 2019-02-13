import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../../../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import styled from "styled-components";
import { styles, AppContext } from "../../../utils";

export default class NavbarHeader extends Component {
  render() {
    const logoPath = logo.replace("http://:8000/", "");
    return (
      <AppContext.Consumer>
        {({ isFarsi, handleLanguage, handleNavbar }) => (
          <HeaderWrapper>
            <div className="leftside">
              <h3
                onClick={() => {
                  // this.props.handleNavbar()
                  handleLanguage();
                }}
              >
                {isFarsi ? "Farsi" : "English"}
              </h3>
              <Link to="/">
                <img src={logoPath} alt="company name" />
              </Link>
            </div>

            <FaAlignRight
              className="toggle-icon"
              onClick={() => {
                // this.props.handleNavbar()
                handleNavbar();
              }}
            />
          </HeaderWrapper>
        )}
      </AppContext.Consumer>
    );
  }
}

const HeaderWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
  .leftside {
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
