import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { Link } from "gatsby"
import ContextConsumer from "../Context"
import ImageMobileAriana from "../../components/imageMobileAriana"

export default function ArianaMobileView() {
  return (
    <ContextConsumer>
      {({ isFarsi, setAboutArianaTabNo }) => (
        <ArianaWrapper>
          <ImageMobileAriana />
          {isFarsi ? (
            <div className="hero-text" style={{ direction: "rtl" }}>
              <h1>
                سلام!
                <br />
                <span
                  style={{
                    whiteSpace: "nowrap",
                    color: `${styles.colors.mainYellow}`,
                  }}
                >
                  آریانا بریوینگ
                </span>{" "}
                <br />
                هستم
              </h1>

              <br />
              <p>آیا علاقمندید که من را بیشتر بشناسید؟</p>
              <Link
                to="/about"
                style={{ textDecoration: "none" }}
                state={{
                  tabNo: 2,
                }}
              >
                <button
                  style={{ fontFamily: "Vazir" }}
                  onClick={() => {
                    setAboutArianaTabNo(2)
                  }}
                >
                  درباره آریانا
                </button>
              </Link>
            </div>
          ) : (
            <div className="hero-text" style={{ fontFamily: "Righteous" }}>
              <h1 style={{ padding: "0.27rem 0" }}>
                HEY! I AM <br />
                <span
                  style={{
                    whiteSpace: "nowrap",
                    color: `${styles.colors.mainYellow}`,
                  }}
                >
                  ARIANA BRAVING
                </span>{" "}
                <br />
              </h1>
              <br />

              {/* <p>and I am a life and wellness coach</p> */}
              <p style={{ padding: "0.27rem 0" }}>
                Are you curious to hear my story?
              </p>

              <Link to="/about" style={{ textDecoration: "none" }}>
                <button
                  onClick={() => {
                    setAboutArianaTabNo(0)
                  }}
                >
                  About Ariana
                </button>
              </Link>
              <br />
              <br />
            </div>
          )}
        </ArianaWrapper>
      )}
    </ContextConsumer>
  )
}

const ArianaWrapper = styled.div`
  /* background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.05) 55%,
      rgba(0, 0, 0, 0.5) 75%
    ),
    url(${props => props.img.src});
  min-height: calc(100vh);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #464646;
  position: relative; */

  background: whitesmoke;
  /* border-bottom: 1px solid black; */

  .hero-text {
    margin: auto;
    text-align: center;
    color: ${styles.colors.mainBlack};
  }
  .hero-text p {
    margin: auto;
    font-size: 1rem;
  }
  .hero-text h1 {
    margin: 1.5rem auto;
    color: ${styles.colors.mainBlack};
    font-size: 2rem;
    line-height: 3.5rem;
    /* letter-spacing: 0.2rem; */
    font-weight: 700;
  }

  .hero-text button {
    border: 2px black solid;
    outline: 0;
    margin: 2rem auto;
    /* color: ${styles.colors.mainWhite}; */
    background-color: transparent;
    color: black;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    text-transform: none;
    font-family: Vazir;
    border-radius: 7px;
    font-size: 1.3rem;
    padding: 15px 25px;
    /* letter-spacing: 0.2rem; */
    font-weight: 700;
    ${styles.border({ color: `${styles.colors.mainBlack}` })};
    ${styles.transition({})};
    &:hover {
      background-color: ${styles.colors.mainBlack};
      color: ${styles.colors.mainYellow};
      cursor: pointer;
    }
  }

  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  }

  @media (max-width: 480px) {
    .hero-text {
      max-width: 450px;
    }
    .hero-text p {
      margin: auto;
      font-size: 1.4rem;
    }
    .hero-text h1 {
      margin: 2rem auto;
      color: ${styles.colors.mainBlack};
      font-size: 2.5rem;
      line-height: 3.5rem;
      /* letter-spacing: 0.2rem; */
      font-weight: 700;
    }
  }
 
`
