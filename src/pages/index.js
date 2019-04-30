import React from "react"
// import Image from "../components/image";
import SEO from "../components/seo"
import Layout from "../components/layout"
// import Img from "gatsby-image";
import styled from "styled-components"
import { styles } from "../utils"
// import img from "../images/bcg/homeBcg.jpeg";
// import QuickInfo from "../components/homePageComponents/QuickInfo";
import Ariana from "../components/homePageComponents/Ariana"
// import Testimony from "../components/homePageComponents/Testimony"
import Testimony1 from "../components/homePageComponents/Testimony1"
import Testimony2 from "../components/homePageComponents/Testimony2"
// import Gallery2 from "../components/homePageComponents/Gallery2";
// import Gallery1 from "../components/homePageComponents/Gallery1";
// import Gallery from "../components/homePageComponents/Gallery";
// import Menu from "../components/homePageComponents/Menu";
import Services from "../components/homePageComponents/Services"
import { graphql } from "gatsby"
import Insta from "../components/homePageComponents/Insta"
import Favourite from "../components/homePageComponents/Favourite"
import ContextConsumer from "../components/Context"
import SubscribeInfo from "../components/homePageComponents/SubscribeInfo"

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
    getImageEN: file(relativePath: { eq: "bcg/HomeEN.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    getImageFR: file(relativePath: { eq: "bcg/HomeFR.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const imageEN = data.getImageEN.childImageSharp.fluid
  const imageFR = data.getImageFR.childImageSharp.fluid
  return (
    <ContextConsumer>
      {({ isFarsi }) => (
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          {isFarsi ? (
            <IndexWrapper img={imageFR}>
              <div className="hero-text" style={{ direction: "rtl" }}>
                <h1>زندگی تو‌ طراحی توست...</h1>
                <h1>قلموی طراحی ات را بردار...</h1>
                <p>
                  اینجا جایی است که طرح یک زندگی سرشار از آرامش و رضایت، زندگی
                  که من اسمش را می گذارم{" "}
                  <span style={{ color: "red" }}>زندگی ایده آل</span>، کشیده و
                  خلق می شود.
                </p>
                <h1 style={{ color: "white" }}>
                  آیا آماده خلق یک اثر یگانه هنری:{" "}
                  <span style={{ color: "red" }}>خلق زندگی ایده آلت</span>
                  هستی؟
                </h1>
              </div>
            </IndexWrapper>
          ) : (
            <IndexWrapper img={imageEN}>
              <div className="hero-text">
                <p>
                  Life is a messy, tough and complicated journey... But we have
                  made for it!
                </p>
                <h1>Welcome my fellow Travellers</h1>
                <p>
                  Let's crack the code of living full on the road trip of
                  life... I call it IDEAL LIFE journey and it's a creative one.
                </p>
                <h1 style={{ color: "white" }}>
                  ARE YOU READY TO{" "}
                  <span style={{ color: "red" }}>CREATE YOURS?</span>
                </h1>
              </div>
            </IndexWrapper>
          )}
          <Services />
          {/* <Testimony /> */}
          <Testimony2 />
          <Ariana />
          <SubscribeInfo />

          {/* <Insta /> */}
          <Favourite />
        </Layout>
      )}
    </ContextConsumer>
  )
}

export default IndexPage

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
    margin-top: 2rem;
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
      max-width: 550px;
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
  @media (max-height: 760px), (max-width: ${styles.navbarHandle.length}) {
    .hero-text p {
      margin: auto;
      font-size: 1.2rem;
    }
    .hero-text h1 {
      margin: 1.5rem auto;
      color: ${styles.colors.mainWhite};
      text-transform: uppercase;
      font-size: 2.2rem;
      line-height: 3rem;
      letter-spacing: 0.2rem;
      font-weight: 700;
    }
  }
  @media (max-height: 600px) {
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
  }
  @media (max-height: 480px) {
    .hero-text p {
      margin: auto;
      font-size: 0.9rem;
      line-height: 1rem;
    }
    .hero-text h1 {
      margin: 1.5rem auto;
      color: ${styles.colors.mainWhite};
      text-transform: uppercase;
      font-size: 1.5rem;
      line-height: 1.5rem;
      letter-spacing: 0.2rem;
      font-weight: 700;
    }
  }
`
