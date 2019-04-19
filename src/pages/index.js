import React from "react";
// import Image from "../components/image";
import SEO from "../components/seo";
import Layout from "../components/layout";
// import Img from "gatsby-image";
import styled from "styled-components";
import { styles, SubscribeInfo } from "../utils";
// import img from "../images/bcg/homeBcg.jpeg";
// import QuickInfo from "../components/homePageComponents/QuickInfo";
import Ariana from "../components/homePageComponents/Ariana";
// import Gallery2 from "../components/homePageComponents/Gallery2";
// import Gallery1 from "../components/homePageComponents/Gallery1";
// import Gallery from "../components/homePageComponents/Gallery";
// import Menu from "../components/homePageComponents/Menu";
import Services from "../components/homePageComponents/Services";
import { graphql } from "gatsby";

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

export const query = graphql`
  query {
    getImage: file(relativePath: { eq: "bcg/home13.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const image = data.getImage.childImageSharp.fluid;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <IndexWrapper img={image}>
        <div className="hero-text">
          <p>
            Life is a messy, tough and complicated journey... But we have made
            for it!
          </p>
          <h1>Welcome my fellow Travellers</h1>
          <p>
            Let's crack the code of living full on the road trip of life... I
            call it IDEAL LIFE journey and it's a creative one.
          </p>
          <h1 style={{ color: "white" }}>
            ARE YOU READY TO <span style={{ color: "red" }}>CREATE YOURS?</span>
          </h1>
        </div>
      </IndexWrapper>
      <SubscribeInfo />
      <Ariana />
      <Services />
    </Layout>
  );
};

export default IndexPage;

const IndexWrapper = styled.div`
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.055059523809523836) 47%,
      rgba(0, 0, 0, 0.5144432773109244) 59%
    ),
    url(${props => props.img.src});
  min-height: calc(100vh);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #464646;
  position: relative;
  .arianaBtn {
    margin: 2rem auto;
    color: ${styles.colors.mainGrey};
    background: transparent;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    font-size: 1.3rem;
    line-height: 2.5rem;
    letter-spacing: 0.2rem;
    font-weight: 700;
    ${styles.border({ color: `${styles.colors.mainGrey}` })};
    ${styles.transition({})};
    &:hover {
      background: ${styles.colors.mainYellow};
      color: ${styles.colors.mainWhite};
      cursor: pointer;
    }
  }
  .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
  .hero-text p {
    margin: auto;
    font-size: 1rem;
  }
  .hero-text h1 {
    margin: 1.5rem auto;
    color: ${styles.colors.mainWhite};
    text-transform: uppercase;
    font-size: 2rem;
    line-height: 2.5rem;
    letter-spacing: 0.2rem;
    font-weight: 700;
  }

  .hero-text button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 10px 25px;
    color: black;
    background-color: #ddd;
    text-align: center;
    cursor: pointer;
  }

  .hero-text button:hover {
    background-color: #555;
    color: white;
  }
  @media (min-width: ${styles.navbarHandle.length}) {
    .hero-text {
      max-width: 450px;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 65%;
      transform: translate(-10%, -50%);
      color: white;
    }
    .hero-text p {
      margin: auto;
      font-size: 1.4rem;
    }
    .hero-text h1 {
      margin: 2rem auto;
      color: ${styles.colors.mainWhite};
      text-transform: uppercase;
      font-size: 2.5rem;
      line-height: 3.5rem;
      letter-spacing: 0.2rem;
      font-weight: 700;
    }
  }
`;
