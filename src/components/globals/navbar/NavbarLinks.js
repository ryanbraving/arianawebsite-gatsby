import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { styles } from "../../../utils"
import ContextConsumer from "../../Context"
import Menu from "../../../pages/resourcesMenu"

export default class NavbarLinks extends Component {
  state = {
    windowWidth: undefined,
    linksEN: [
      {
        id: 0,
        path: "/",
        name: "home",
      },
      {
        id: 1,
        path: "/services",
        name: "services",
      },
      {
        id: 2,
        path: "/resources",
        name: "blog",
      },
      {
        id: 3,
        path: "/about",
        name: "about",
      },
      {
        id: 4,
        path: "/contact",
        name: "contact",
      },
    ],
    linksFR: [
      {
        id: 0,
        path: "/contact",
        name: "تماس با آریانا",
      },
      {
        id: 1,
        path: "/about",
        name: "درباره آریانا",
      },
      {
        id: 2,
        path: "/resources",
        name: "منابع رایگان",
      },
      {
        id: 3,
        path: "/services",
        name: "خدمات",
      },
      {
        id: 4,
        path: "/",
        name: "صفحه اصلی",
      },
    ],
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener("resize", this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  render() {
    const { linksFR, linksEN } = this.state
    return (
      <ContextConsumer>
        {({
          closeNavbar,
          navbarOpen,
          isFarsi,
          setAboutArianaTabNo,
          handleNavbar,
        }) => (
          <LinkWrapper open={navbarOpen}>
            {isFarsi && this.state.windowWidth < 980
              ? linksFR
                  .slice(0)
                  .reverse()
                  .map(item => {
                    return (
                      <li key={item.id}>
                        <Link
                          activeClassName="active"
                          to={item.path}
                          className="nav-link"
                          onClick={() => {
                            closeNavbar()
                            setAboutArianaTabNo(0)
                          }}
                        >
                          {item.name}
                        </Link>
                      </li>
                    )
                  })
              : isFarsi && this.state.windowWidth >= 980
              ? linksFR.map(item => {
                  return (
                    <li key={item.id}>
                      <Link
                        activeClassName="active"
                        to={item.path}
                        className="nav-link"
                        onClick={() => {
                          closeNavbar()
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                })
              : linksEN.map(item => {
                  return (
                    <li key={item.id}>
                      <Link
                        activeClassName="active"
                        to={item.path}
                        className="nav-link"
                        onClick={() => {
                          closeNavbar()
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
          </LinkWrapper>
        )}
      </ContextConsumer>
    )
  }
}

const LinkWrapper = styled.ul`
  li{
    list-style-type: none;
  }
  .nav-link{
    white-space: nowrap;
    border: transparent 0.15rem solid;
    display: block;
    /* float: right;
    clear: right; */
    text-decoration: none;
    padding: 0.5rem 0.7rem 0.5rem 0.7rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
  
    &:hover{
      ${styles.transDefault};  
  
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      /* padding: 0.5rem 1rem 0.5rem 1.3rem; */
    }
    
  }
  .active{
      background: transparent;
      color: ${styles.colors.mainYellow};
      ${styles.border({ color: "currentColor", width: "0.15rem" })};
      border-radius: 0px 0px 10px 10px;
      
      /* border-bottom: 2px solid currentColor; 
      padding-bottom:0;  */
      
    }
  height: ${props => (props.open ? "242px" : "0px")};
  overflow: hidden;
  /* ${styles.transObject({ time: "1s", type: "ease" })}; */
  @media (min-width: ${styles.navbarHandle.length}) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover{
      background: ${styles.colors.mainWhite};
      // color: ${styles.colors.mainYellow};
      /* padding: 0.5rem 1rem 0.5rem 1rem; */
    }
  }
`
