import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import { styles } from "../utils"
import { graphql } from "gatsby"
import styled from "styled-components"
import ServiceTabs from "../components/servicePage/serviceTabs"
import ContextConsumer from "../components/Context"
import Testimony from "./testimonyPage2"
import ServiceTabPrivateCoachingFR from "../components/servicePage/ServiceTab_PrivateCoaching_FR"
import ServiceTabPrivateCoachingEN from "../components/servicePage/ServiceTab_PrivateCoaching_EN"
import ServiceTabGroupCoachingFR from "../components/servicePage/ServiceTab_GroupCoaching_FR"
import ServiceTabGroupCoachingEN from "../components/servicePage/ServiceTab_GroupCoaching_EN"
import ServiceTabOnlineCoursesFR from "../components/servicePage/ServiceTab_OnlineCourses_FR"
import ServiceTabOnlineCoursesEN from "../components/servicePage/ServiceTab_OnlineCourses_EN"
import ServiceTabQnAFR from "../components/servicePage/ServiceTab_QuestionAnswer_FR"
import ServiceTabQnAEN from "../components/servicePage/ServiceTab_QuestionAnswer_EN"
import LandingCheck from "../components/LandingCheck"

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
    getImage: file(relativePath: { eq: "bcg/Coaching8.JPG" }) {
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
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
})

class ServicePage extends Component {
  state = {
    tabNo: 0,
  }

  tabNo = no => {
    this.setState({
      tabNo: no,
    })
    // console.log(this.state.tabNo)
  }

  render() {
    const { data, location } = this.props

    var link_tabNo
    if (location.state != null) {
      link_tabNo = location.state.link_tabNo
      location.state.link_tabNo = null
      // this.tabNo(link_tabNo)
      // this.state.tabNo = link_tabNo
    }
    if (link_tabNo == null) {
    }
    if (link_tabNo != null) {
      this.state.tabNo = link_tabNo
    }

    return (
      <ContextConsumer>
        {({ landingDone, isFarsi }) => (
          <ServiceWrapper>
            {landingDone ? (
              <Layout>
                <ImageWrapper img={data.getImage.childImageSharp.fluid} />
                <ServiceTabs tabNo={this.tabNo} link_tabNo={link_tabNo} />
                {/* <Section> */}
                {isFarsi && this.state.tabNo === 0 ? (
                  <ServiceTabPrivateCoachingFR />
                ) : isFarsi && this.state.tabNo === 1 ? (
                  <ServiceTabGroupCoachingFR />
                ) : isFarsi && this.state.tabNo === 2 ? (
                  <ServiceTabOnlineCoursesFR />
                ) : isFarsi && this.state.tabNo === 3 ? (
                  <ServiceTabQnAFR />
                ) : isFarsi && this.state.tabNo === 4 ? (
                  <Testimony />
                ) : !isFarsi && this.state.tabNo === 0 ? (
                  <ServiceTabPrivateCoachingEN />
                ) : !isFarsi && this.state.tabNo === 1 ? (
                  <ServiceTabGroupCoachingEN />
                ) : !isFarsi && this.state.tabNo === 2 ? (
                  <ServiceTabOnlineCoursesEN />
                ) : !isFarsi && this.state.tabNo === 3 ? (
                  <ServiceTabQnAEN />
                ) : (
                  <Testimony />
                )}
              </Layout>
            ) : (
              <LandingCheck />
            )}
          </ServiceWrapper>
        )}
      </ContextConsumer>
    )
  }
}

ServicePage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(stylesTheme)(ServicePage)

const ImageWrapper = styled.div`
  background: url(${props => props.img.src});
  min-height: calc(90vh);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #464646;
`

const ServiceWrapper = styled.div`
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
  .coachingType {
    margin: -0.5rem 0 -0.5rem 0;
    font-size: 0.8rem;
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
