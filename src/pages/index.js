import React from "react";
// import Pages from "../components/Pages";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { HomeHeader, Banner, BannerButton, SubscribeInfo } from "../utils";
// import img from "../images/bcg/homeBcg.jpeg";
// import QuickInfo from "../components/homePageComponents/QuickInfo";
import Gallery from "../components/homePageComponents/Gallery";
import Menu from "../components/homePageComponents/Menu";
import { StaticQuery, graphql, Link } from "gatsby";

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
                title="Hey! I am ARIANA BRAVING"
                subtitle="Curious to Know Who I am?"
              >
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <BannerButton style={{ margin: "1rem auto" }}>
                    About Ariana
                  </BannerButton>
                </Link>
              </Banner>
            </HomeHeader>
          );
        }}
      />

      {/* <QuickInfo /> */}
      <SubscribeInfo />
      <Gallery />
      <Menu />
    </Layout>
  );
}
