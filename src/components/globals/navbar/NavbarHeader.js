import React, { Component } from "react";
import { Link } from "gatsby";
// import logo from "../../../assets/logo.svg";
// import logo from "../../../assets/ariana.png";
// import logo from "../../../assets/Logo2.png";
// import logo from "../../../assets/logo3.png";

import { FaAlignRight } from "react-icons/fa";
import styled from "styled-components";
import { styles } from "../../../utils";
import ContextConsumer from "../../Context";
import Language from "./Language";

export default class NavbarHeader extends Component {
  render() {
    // const logoPath = logo.replace("http://:8000/", "");
    return (
      <ContextConsumer>
        {({ handleNavbar }) => (
          <HeaderWrapper>
            <div className="leftside">
              <Link to="/" style={{ textDecoration: "none" }}>
                <h1 className="brand">Ariana Braving</h1>
                {/* <img className="logo" src={logoPath} alt="company name" /> */}
              </Link>
            </div>

            <div className="rightside">
              <Language />
              <FaAlignRight
                className="toggle-icon"
                onClick={() => {
                  // this.props.handleNavbar()
                  handleNavbar();
                }}
              />
            </div>
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
  .leftside {
  }
  .rightside {
    width: 105px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: ${styles.navbarHandle.length}) {
    .rightside {
      display: none;
    }
  }
  
  
  .toggle-language {
    color: green;
  }
  .logo {
    /* height: 100px; */
    /* position: fixed;
    -webkit-box-shadow: -1px 9px 35px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 9px 35px 0px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 9px 35px 0px rgba(0, 0, 0, 0.75);
    height: 100px;
    margin-top: -20px;
    margin-left: -150px;
    border-radius: 15px; */
  }
  .brand {
    color: ${styles.colors.mainGrey};
    text-shadow: 1px 0px 1px grey;
    letter-spacing: 0.1rem;
    /* border: 3px solid grey; */
    padding: 2px 10px;
    ${styles.transObject({ time: "1s", type: "ease" })};

    /* -webkit-box-shadow: -2px -2px 9px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -2px -2px 9px 2px rgba(0, 0, 0, 0.75);
    box-shadow: -2px -2px 9px 2px rgba(0, 0, 0, 0.75); */
    &:hover {
      /* color: ${styles.colors.mainYellow}; */
      -webkit-box-shadow: 2px -2px 9px 2px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 2px -2px 9px 2px rgba(0, 0, 0, 0.75);
      box-shadow: 2px -2px 9px 2px rgba(0, 0, 0, 0.75);
    }
    /* font-weight: 700; */
  }
`;
