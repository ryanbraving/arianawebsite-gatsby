import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../../../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import styled from "styled-components";
import { styles } from "../../../utils";
import ContextConsumer from "../../Context";
import Language from "./Language";

export default class NavbarHeader extends Component {
  render() {
    const logoPath = logo.replace("http://:8000/", "");
    return (
      <ContextConsumer>
        {({ handleNavbar }) => (
          <HeaderWrapper>
            <div className="leftside">
              <Language />
              <Link to="/" style={{ textDecoration: "none" }}>
                {/* <h1>Ariana Braving</h1> */}
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
      </ContextConsumer>
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
  .toggle-language {
    color: green;
  }
`;
