// import React from "react";
import React, { Component } from "react";

import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import Navbar from "../components/globals/navbar";
import Footer from "../components/globals/Footer";
import { AppContext } from "../utils";
// import './bootstrap.min.css'
// import "./layout.css";
// import '../sass/layout.scss'

class Layout extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //       navbarOpen: false,
  //       isFarsi: true
  //     }
  // }

  state = {
    navbarOpen: false,
    isFarsi: false
  };
  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen };
    });
  };
  handleLanguage = () => {
    this.setState(() => {
      return { isFarsi: !this.state.isFarsi };
    });
  };
  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        isFarsi: this.state.isFarsi,
        ryan: "green"
        // handleLanguage: () => this.setState({ isFarsi: !this.state.isFarsi })
      });
    });
    // console.log(children);
    return (
      <React.Fragment>
        <GlobalStyle />
        <AppContext.Provider
          value={{
            navbarOpen: this.state.navbarOpen,
            isFarsi1: this.state.isFarsi,
            handleNavbar: this.handleNavbar,
            handleLanguage: this.handleLanguage
          }}
        >
          <Navbar />
        </AppContext.Provider>
        {children}
        <Footer />
      </React.Fragment>
    );
  }
}

// const Layout = ({ children }) => {
//   return (
//     <React.Fragment>
//       <GlobalStyle />
//       <Navbar />
//       {children}
//       <Footer />
//     </React.Fragment>
//   );
// };

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  body{
      font-family: 'Open Sans', sans-serif;
      color: black;
      background: #fff;
  }
`;

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: `0 auto`,
//             maxWidth: 960,
//             padding: `0px 1.0875rem 1.45rem`,
//             paddingTop: 0,
//           }}
//         >
//           {children}
//           <footer>
//             © {new Date().getFullYear()}, Built with
//             {` `}
//             <a href="https://www.gatsbyjs.org">Gatsby</a>
//           </footer>
//         </div>
//       </>
//     )}
//   />
// )

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
