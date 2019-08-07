import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import { styles } from "../utils"
import { graphql } from "gatsby"
import styled from "styled-components"
import AboutTabs from "./aboutTabs"
import ContextConsumer from "../components/Context"
import Testimony from "./testimonyPage2"
import AboutTabAboutArianaFR from "../components/aboutPage/AboutTab_AboutAriana_FR"
import AboutTabAboutArianaEN from "../components/aboutPage/AboutTab_AboutAriana_EN"
import AboutTabEducationFR from "../components/aboutPage/AboutTab_Education_FR"
import AboutTabEducationEN from "../components/aboutPage/AboutTab_Education_EN"

// import img from "../images/bcg/aboutBcg.jpeg"

// export default class AboutPage extends Component {
//   render() {
//     const Child = ({ isFarsi }) => (
//       <div>
//         <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//         <PageHeader img={img}>
//           <Banner title="about" subtitle="a little about us" />
//         </PageHeader>
//       </div>
//     );
//     return (
//       <Layout>
//         <Child />
//       </Layout>
//     );
//   }
// }

export const GET_IMAGE = graphql`
  query {
    getImage: file(relativePath: { eq: "bcg/About.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const stylesTheme = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

class AboutPage extends Component {
  state = {
    tabNo: 0,
  }

  tabNo = no => {
    this.setState({
      tabNo: no,
    })
  }

  render() {
    // var tabNo = undefined
    // if (location.state != null) {
    //   tabNo = location.state.tabNo
    // }
    const { data } = this.props
    return (
      <ContextConsumer>
        {({ isFarsi }) => (
          <Layout>
            <AboutWrapper>
              <ImageWrapper img={data.getImage.childImageSharp.fluid} />
              <AboutTabs tabNo={this.tabNo} />
              {/* <Section> */}

              {isFarsi && this.state.tabNo === 0 ? (
                <AboutTabAboutArianaFR />
              ) : isFarsi && this.state.tabNo === 1 ? (
                <AboutTabEducationFR />
              ) : isFarsi && this.state.tabNo === 2 ? (
                <Testimony />
              ) : !isFarsi && this.state.tabNo === 0 ? (
                <AboutTabAboutArianaEN />
              ) : !isFarsi && this.state.tabNo === 1 ? (
                <AboutTabEducationEN />
              ) : (
                <Testimony />
              )}
            </AboutWrapper>
          </Layout>
        )}
      </ContextConsumer>
    )
  }
}

// AboutPage.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default withStyles(stylesTheme)(AboutPage)

const ImageWrapper = styled.div`
  background: url(${props => props.img.src});
  min-height: calc(90vh);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #464646;
`

const AboutWrapper = styled.div`
  .buttons {
    display: flex;
    justify-content: space-around;
  }
  .paper {
    margin: 2rem auto;
    /* width: 900px; */
  }
  .text {
    margin-top: 1rem;
    line-height: 3rem;
    font-size: 1rem;
    /* font-weight: bold; */
    text-align: justify;
  }
  .textFR {
    direction: rtl;
    font-family: "Vazir";
  }
  .intro {
    margin-top: 1rem;
    /* font-size: 1.5rem; */
    /* text-align: center; */
  }
  .introFR {
    direction: rtl;
    font-family: "Vazir";
  }
  .underline {
    width: 10rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 2rem auto;
  }
  @media (min-width: 768px) {
    .paper {
      width: 80%;
    }
  }
  @media (min-width: 992px) {
    .paper {
      width: 70%;
    }
  }
  @media (min-width: 1292px) {
    .paper {
      width: 60%;
    }
  }
  @media (min-width: 1492px) {
    .paper {
      width: 50%;
    }
  }
  @media (max-width: 768px) {
    .paper {
      width: 90%;
    }
  }
`
