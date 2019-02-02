import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { HomeHeader, Banner, BannerButton } from "../utils";
// import img from "../images/bcg/homeBcg.jpeg";
import QuickInfo from "../components/homePageComponents/QuickInfo";
import Gallery from "../components/homePageComponents/Gallery-1";
import Menu from "../components/homePageComponents/Menu";
import { StaticQuery, graphql } from "gatsby";

// const img1 = "/static/fc80c1b58ec75bbadcd6912d9d503e82/8484e/homeBcg.jpeg";
// console.log(img1);
// const img2 = "/static/d8b29c8eab79535a6284612b58d88065/8484e/arianaBcg.jpg";
// const img3 = "/static/8249d0a970905b8c5b39ccf182963e0f/8484e/arianaBcg2.jpg";
// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <HomeHeader img={img}>
//       <Banner title="eatery" subtitle="11 signal Hill Terr, Calgary, AB">
//         <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
//       </Banner>
//     </HomeHeader>
//     <QuickInfo />
//     <Gallery />
//     <Menu />
//   </Layout>
// );

// export default IndexPage;

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
export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <StaticQuery
        query={GET_IMAGE}
        render={data => {
          return (
            <HomeHeader img={data.getImage.childImageSharp.fluid}>
              <Banner
                title="eatery"
                subtitle="11 signal Hill Terr, Calgary, AB"
              >
                <BannerButton style={{ margin: "2rem auto" }}>
                  about
                </BannerButton>
              </Banner>
            </HomeHeader>
          );
        }}
      />

      <QuickInfo />
      <Gallery />
      <Menu />
    </Layout>
  );
}
