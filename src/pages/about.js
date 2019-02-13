// import React from 'react'
import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { PageHeader, Banner } from "../utils";
import img from "../images/bcg/aboutBcg.jpeg";

export default class AboutPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open: false
  //   };
  // }

  // componentWillReceiveProps(props) {
  //   this.setState({ open: props.isFarsi });
  // }

  // toggleMenu() {
  //   this.setState({
  //     open: !this.state.open
  //   });
  // }
  render() {
    const Child = ({ isFarsi }) => (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <PageHeader img={img}>
          <Banner title="about" subtitle="a little about us" />
        </PageHeader>
      </Layout>
    );
    return (
      <Layout>
        <Child />
      </Layout>
    );
  }
}

// const AboutPage = () => (

//   <Layout>
//     {/* {this.state.isFarsi} */}
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <PageHeader img={img}>
//       <Banner title='about' subtitle='a little about us'>

//       </Banner>
//     </PageHeader>
//   </Layout>
// )

// export default AboutPage
