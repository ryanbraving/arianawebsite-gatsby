// import React from "react";
import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { PageHeader, Banner } from "../utils";
import img from "../images/bcg/contactBcg.jpeg";
// import ContextConsumer from "../components/Context";

// const ContactPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <PageHeader img={img}>
//       <Banner title="contact us" subtitle="let's get in touch" />
//     </PageHeader>
//   </Layout>
// );

// export default ContactPage;

export default class ContactPage extends Component {
  render() {
    return (
      // <ContextConsumer>
      //   {({ ryan }) => (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <PageHeader img={img}>
          <Banner title="contact us" subtitle="let's get in touch" />
        </PageHeader>
        {/* <h1 style={{ color: ryan }}>this is contact page</h1> */}
      </Layout>
      // )}
      // </ContextConsumer>
    );
  }
}
