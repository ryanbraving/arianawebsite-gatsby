import React, { Component } from "react"
import styled from "styled-components"
import { styles, SectionButton } from "../utils"
import { graphql, Link, StaticQuery } from "gatsby"
import ContextConsumer from "../components/Context"

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
    getImageEN: file(relativePath: { eq: "bcg/HomeEN.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    getImageFR: file(relativePath: { eq: "bcg/HomeFR16.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

class IndexDesktopView extends Component {
  render() {
    // const { data } = this.props
    // const imageEN = data.getImageEN.childImageSharp.fluid
    // const imageFR = data.getImageFR.childImageSharp.fluid
    // const imageEN_mobile = data.getImageEN_mobile.childImageSharp.fluid
    // const imageFR_mobile = data.getImageFR_mobile.childImageSharp.fluid
    return (
      <ContextConsumer>
        {({ isFarsi }) => (
          <StaticQuery
            query={GET_IMAGE}
            render={data => {
              return (
                <React.Fragment>
                  {isFarsi ? (
                    // <IndexWrapper
                    //   img={this.state.windowWidth <= 1200 ? imageFR : imageFR}
                    //   windowSize={this.state.windowWidth}
                    // >
                    <IndexWrapper img={data.getImageFR.childImageSharp.fluid}>
                      <div className="hero-text" style={{ direction: "rtl" }}>
                        <h1 style={{ letterSpacing: "0rem" }}>
                          زندگی تو‌ طراحی توست...
                        </h1>
                        <h1 style={{ letterSpacing: "0rem" }}>
                          قلموی طراحی ات را بردار...
                        </h1>
                        <p>
                          اینجا جایی است که طرح یک زندگی سرشار از آرامش و رضایت،
                          زندگی که من اسمش را می گذارم{" "}
                          <span
                            style={{
                              color: `${styles.colors.mainYellow}`,
                              whiteSpace: "nowrap",
                            }}
                          >
                            زندگی ایده آل
                          </span>{" "}
                          کشیده و خلق می شود.
                        </p>
                        <h1
                          style={{
                            color: "white",
                            letterSpacing: "0rem",
                          }}
                        >
                          آیا آماده خلق یک اثر یگانه هنری:{" "}
                        </h1>
                        <h1>
                          <span
                            style={{ color: `${styles.colors.mainYellow}` }}
                          >
                            خلق زندگی ایده آلت
                          </span>{" "}
                          هستی؟
                        </h1>
                        <Link
                          to="/coaching.request"
                          style={{ textDecoration: "none" }}
                          state={{
                            coachingTypeRequest: "main",
                          }}
                        >
                          <SectionButton style={{ margin: "0.5rem auto" }}>
                            درخواست کوچینگ
                          </SectionButton>
                        </Link>
                      </div>
                    </IndexWrapper>
                  ) : (
                    <IndexWrapper img={data.getImageEN.childImageSharp.fluid}>
                      <div
                        className="hero-text"
                        style={{ fontFamily: "Righteous" }}
                      >
                        <p>
                          Life is a messy, tough and complicated journey... But
                          we have made for it!
                        </p>
                        <h1>Welcome my fellow Travellers</h1>
                        <p>
                          Let's crack the code of living full on the road trip
                          of life... I call it{" "}
                          <span
                            style={{
                              color: `${styles.colors.mainYellow}`,
                              whiteSpace: "nowrap",
                              fontWeight: "bold",
                            }}
                          >
                            IDEAL LIFE
                          </span>{" "}
                          journey and it's a creative one.
                        </p>
                        <h1 style={{ color: "white" }}>
                          ARE YOU READY TO{" "}
                          <span
                            style={{
                              color: `${styles.colors.mainYellow}`,
                              whiteSpace: "nowrap",
                            }}
                          >
                            CREATE YOURS?
                          </span>
                        </h1>
                        <Link
                          to="/coaching.request"
                          style={{ textDecoration: "none" }}
                          state={{
                            coachingTypeRequest: "main",
                          }}
                        >
                          <SectionButton style={{ margin: "0.5rem auto" }}>
                            Book Your First Session
                          </SectionButton>
                        </Link>
                      </div>
                    </IndexWrapper>
                  )}
                </React.Fragment>
              )
            }}
          />
        )}
      </ContextConsumer>
    )
  }
}

// const IndexPage = ({ data }) => {

//   return (

//   )
// }

export default IndexDesktopView

const IndexWrapper = styled.div`
  /* margin-top:20rem; */
  /* min-height: calc(${props =>
    props.windowSize <= 400 ? "50vh" : "100vh"}) ; */
  /* max-width:100%; */
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.055059523809523836) 57%,
      rgba(0, 0, 0, 0.3644432773109244) 69%
    ),
    url(${props => props.img.src});
  min-height: calc(100vh) ;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #464646;
  position: relative;
  /* .arianaBtn {
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
  } */
  .hero-text {
    max-width: 550px;
    /* margin-top: 2rem; */
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
    letter-spacing: 0.1rem;
    font-weight: 700;
  }

  .hero-text button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 10px 25px;
    color: black;
    background-color: #ddd;
    background-color: ${styles.colors.mainWhite};
    text-align: center;
    cursor: pointer;
    text-transform: none;
    font-family: Vazir;
    border-radius: 7px;
  }

  .hero-text button:hover {
    background-color: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow};
  }
  /* @media (min-width: ${styles.navbarHandle.length}) {
    
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
      letter-spacing: 0.1rem;
      font-weight: 700;
    }
  } */
  @media (max-height: 920px) {
    /* styles.navbarHandle.length = 980px */
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
      letter-spacing: 0.1rem;
      font-weight: 700;
    }
  }
  /* @media (max-height: 600px), (max-width: 600px) {
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
      letter-spacing: 0.1rem;
      font-weight: 700;
    }
  }
  @media (max-height: 480px), (max-width: 480px) {
    .hero-text p {
      margin: auto;
      font-size: 0.9rem;
      line-height: 1.5rem;
    }
    .hero-text h1 {
      margin: 1.5rem auto;
      color: ${styles.colors.mainWhite};
      text-transform: uppercase;
      font-size: 1.5rem;
      line-height: 1.8rem;
      letter-spacing: 0.1rem;
      font-weight: 700;
    } */
  }
`
