import React from "react";

import Layout from "../components/layout";
// import SEO from "../components/seo";
import { PageHeader, Banner } from "../utils";
// import img from '../images/bcg/menuBcg.jpeg'
import { StaticQuery, graphql } from "gatsby";
import Posts from "../components/blogPageComponents/Posts";

const GET_IMAGE = graphql`
  query {
    getImage: file(relativePath: { eq: "bcg/arianaBcg.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const BlogPage = () => {
  return (
    <Layout>
      <StaticQuery
        query={GET_IMAGE}
        render={data => {
          return (
            <PageHeader img={data.getImage.childImageSharp.fluid}>
              <Banner title="blog" subtitle={`let's dig in `} />
            </PageHeader>
          );
        }}
      />
      <Posts />
    </Layout>
  );
};

// const BlogPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <PageHeader img={img}>
//       <Banner title="menu" subtitle={`let's dig in `} />
//     </PageHeader>
//   </Layout>
// );

export default BlogPage;
