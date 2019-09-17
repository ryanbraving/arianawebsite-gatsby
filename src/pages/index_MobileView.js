import React, { Component } from "react"
import styled from "styled-components"
import { styles, SectionButton } from "../utils"
import { Link } from "gatsby"
import ContextConsumer from "../components/Context"
import ImageMobileFR from "../images/images_JS/imageMobileFR"
import ImageMobileEN from "../images/images_JS/imageMobileEN"
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

class IndexMobileView extends Component {
  render() {
    return (
      <ContextConsumer>
        {({ isFarsi }) => (
          <IndexWrapper>
            {isFarsi ? (
              <React.Fragment>
                <ImageMobileFR />
                <div className="hero-text" style={{ direction: "rtl" }}>
                  <h1 style={{ letterSpacing: "0rem" }}>
                    زندگی تو‌ طراحی توست...
                  </h1>
                  <h1 style={{ letterSpacing: "0rem" }}>
                    قلموی طراحی‌ات را بردار...
                  </h1>
                  <p>
                    اینجا جایی است که طرح یک زندگی سرشار از آرامش و رضایت، زندگی
                    که من اسمش را می‌گذارم{" "}
                    <span
                      style={{
                        color: `${styles.colors.mainYellow}`,
                        whiteSpace: "nowrap",
                      }}
                    >
                      زندگی ایده آل
                    </span>{" "}
                    کشیده و خلق می‌شود.
                  </p>
                  <h1>آیا آماده خلق یک اثر یگانه هنری: </h1>
                  <h1>
                    <span style={{ color: `${styles.colors.mainYellow}` }}>
                      خلق زندگی ایده‌آلت
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
                    <SectionButton style={{ margin: "0.5rem auto 3rem auto" }}>
                      درخواست کوچینگ
                    </SectionButton>
                  </Link>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <ImageMobileEN />
                <div className="hero-text" style={{ fontFamily: "Righteous" }}>
                  <p>
                    Life is a messy, tough and complicated journey... But we
                    have made for it!
                  </p>
                  <h1>Welcome my fellow Travellers</h1>
                  <p>
                    Let's crack the code of living full on the road trip of
                    life... I call it{" "}
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
                  <h1>
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
                    <SectionButton style={{ margin: "0.5rem auto 3rem auto" }}>
                      Book Your First Session
                    </SectionButton>
                  </Link>
                  {/* <div className="underline" /> */}
                </div>
              </React.Fragment>
            )}
          </IndexWrapper>
        )}
      </ContextConsumer>
    )
  }
}

// const IndexPage = ({ data }) => {

//   return (

//   )
// }

export default IndexMobileView

const IndexWrapper = styled.div`
  background: whitesmoke;
  border-bottom: 1px solid black;
  /* background: #878f99; */
  /* background: #d6cbd3; */
  /* background: #ada397; */
  /* background: #b9936c; */
  /* background: #3b3a30; */
  /* background: #686256; */
  .hero-text {
    margin: auto;
    max-width: 450px;
    margin-top: 2rem;
    text-align: center;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    color: ${styles.colors.mainBlack};
  }

  .hero-text p {
    margin: 2rem auto;
    font-size: 1rem;
  }
  .hero-text h1 {
    margin: 1.5rem auto;
    color: ${styles.colors.mainBlack};
    text-transform: uppercase;
    font-size: 2rem;
    line-height: 2.5rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
  }

  .hero-text button {
    border: 2px black solid;
    outline: 0;
    display: inline-block;
    padding: 10px 25px;
    color: black;
    background-color: transparent;
    /* background-color: ${styles.colors.mainWhite}; */
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
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  }

  @media (max-width: 480px) {
    .hero-text {
      max-width: 320px;
    }
    .hero-text p {
      margin: auto;
      font-size: 0.9rem;
      line-height: 1.5rem;
    }
    .hero-text h1 {
      margin: 1.5rem auto;
      color: ${styles.colors.mainBlack};
      text-transform: uppercase;
      font-size: 1.5rem;
      line-height: 1.8rem;
      letter-spacing: 0.1rem;
      font-weight: 700;
    }
  }
`
