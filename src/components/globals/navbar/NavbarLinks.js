import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { styles } from "../../../utils";
import ContextConsumer from "../../Context";

export default class NavbarLinks extends Component {
  state = {
    linksEN: [
      {
        id: 0,
        path: "/",
        name: "home"
      },
      {
        id: 1,
        path: "/coaching",
        name: "coaching"
      },
      {
        id: 2,
        path: "/blog",
        name: "blog"
      },
      {
        id: 3,
        path: "/about",
        name: "about"
      },
      {
        id: 4,
        path: "/contact",
        name: "contact"
      }
    ],
    linksFR: [
      {
        id: 0,
        path: "/contact",
        name: "تماس با آریانا"
      },
      {
        id: 1,
        path: "/about",
        name: "درباره آریانا"
      },
      {
        id: 2,
        path: "/blog",
        name: "وبلاگ"
      },
      {
        id: 3,
        path: "/coaching",
        name: "کوچینگ"
      },
      {
        id: 4,
        path: "/",
        name: "صفحه اصلی"
      }
    ]
  };
  render() {
    const { linksFR, linksEN } = this.state;
    return (
      <ContextConsumer>
        {({ navbarOpen, isFarsi }) => (
          <LinkWrapper open={navbarOpen}>
            {isFarsi
              ? linksFR.map(item => {
                  return (
                    <li key={item.id}>
                      <Link
                        activeClassName="active"
                        to={item.path}
                        className="nav-link"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })
              : linksEN.map(item => {
                  return (
                    <li key={item.id}>
                      <Link
                        activeClassName="active"
                        to={item.path}
                        className="nav-link"
                      >
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
    border: transparent 0.15rem solid;
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
  .active{
      background: transparent;
      ${styles.border({ color: "grey", width: "0.15rem" })};
      color: ${styles.colors.mainYellow};
      border-radius: 0px 0px 10px 10px;
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
