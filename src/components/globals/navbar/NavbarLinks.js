import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { styles } from "../../../utils";
import ContextConsumer from "../../Context";

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        nameEn: "home",
        nameFr: "صفحه اصلی"
      },
      {
        id: 1,
        path: "/about",
        nameEn: "about",
        nameFr: "درباره آریانا"
      },
      {
        id: 2,
        path: "/blog",
        nameEn: "blog",
        nameFr: "وبلاگ"
      },
      {
        id: 3,
        path: "/contact",
        nameEn: "contact",
        nameFr: "تماس با آریانا"
      }
    ]
  };
  render() {
    return (
      <ContextConsumer>
        {({ navbarOpen, isFarsi }) => (
          <LinkWrapper open={navbarOpen}>
            {this.state.links.map(item => {
              return (
                <li key={item.id}>
                  <Link to={item.path} className="nav-link">
                    {isFarsi ? item.nameFr : item.nameEn}
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </LinkWrapper>
        )}
      </ContextConsumer>
    );
  }
}

const LinkWrapper = styled.ul`
  li{
    list-style-type: none;
  }
  .nav-link{
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};  
    &:hover{
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "152px" : "0px")};
  overflow: hidden;
  ${styles.transObject({ time: "1s", type: "ease" })};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover{
      background: ${styles.colors.mainWhite};
      // color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }

  }
`;
