import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import classnames from "classnames"
import Layout from "../components/layout"
import { styles } from "../utils"
import { graphql } from "gatsby"
import styled from "styled-components"
import CoachingTabs from "./coachingTabs"
import ContextConsumer from "../components/Context"
import Testimony from "./testimonyPage2"
import CoachingTabPrivateCoachingFR from "../components/coachingPage/CoachingTab_PrivateCoaching_FR"
import CoachingTabGroupCoachingFR from "../components/coachingPage/CoachingTab_GroupCoaching_FR"
import CoachingTabOnlineCoursesFR from "../components/coachingPage/CoachingTab_OnlineCourses_FR"
import CoachingTabQnAFR from "../components/coachingPage/CoachingTab_QuestionAnswer_FR"

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
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

class CoachingPage extends Component {
  state = {
    tabNo: 0,
  }

  tabNo = no => {
    this.setState({
      tabNo: no,
    })
    // console.log(this.state.tabNo)
  }
  // const CoachingPage = props => {
  //   const { classes, location } = props
  //   var tabNo = undefined
  //   if (location.state != null) {
  //     tabNo = location.state.tabNo
  //   }
  render() {
    const { classes, data } = this.props
    // var tabNo = undefined
    // if (location.state != null) {
    //   tabNo = location.state.tabNo
    // }
    return (
      <ContextConsumer>
        {({ isFarsi }) => (
          <Layout>
           
                  <CoachingWrapper>
                    <ImageWrapper img={data.getImage.childImageSharp.fluid} />
                    <CoachingTabs tabNo={this.tabNo} />
                    {/* <Section> */}
                    {isFarsi && this.state.tabNo === 0 ? (
                      <CoachingTabPrivateCoachingFR />
                    ) : isFarsi && this.state.tabNo === 1 ? (
                      <CoachingTabGroupCoachingFR />
                    ) : isFarsi && this.state.tabNo === 2 ? (
                      <CoachingTabOnlineCoursesFR />
                    ) : isFarsi && this.state.tabNo === 3 ? (
                      <CoachingTabQnAFR />
                    ) : isFarsi && this.state.tabNo === 4 ? (
                      <Testimony />
                    ) : !isFarsi && this.state.tabNo === 0 ? (
                      <Paper
                        className={classnames(classes.root, "paper")}
                        elevation={20}
                      >
                        <Typography
                          variant="h5"
                          component="h3"
                          className={classnames("intro")}
                        >
                          Private Sessions
                        </Typography>
                      </Paper>
                    ) : !isFarsi && this.state.tabNo === 1 ? (
                      <Paper
                        className={classnames(classes.root, "paper")}
                        elevation={20}
                      >
                        <Typography
                          variant="h5"
                          component="h3"
                          className={classnames("intro")}
                        >
                          Group Coaching
                        </Typography>
                      </Paper>
                    ) : !isFarsi && this.state.tabNo === 2 ? (
                      <Paper
                        className={classnames(classes.root, "paper")}
                        elevation={20}
                      >
                        <Typography
                          variant="h5"
                          component="h3"
                          className={classnames("intro")}
                        >
                          Online Courses
                        </Typography>
                      </Paper>
                    ) : !isFarsi && this.state.tabNo === 3 ? (
                      <Paper
                        className={classnames(classes.root, "paper")}
                        elevation={20}
                      >
                        <Typography
                          variant="h5"
                          component="h3"
                          className={classnames("intro")}
                        >
                          Q & A
                        </Typography>
                      </Paper>
                    ) : (
                      <Testimony />
                    )}
                  </CoachingWrapper>
          </Layout>
        )}
      </ContextConsumer>
    )
  }
}

CoachingPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(stylesTheme)(CoachingPage)

const ImageWrapper = styled.div`
  background: url(${props => props.img.src});
  min-height: calc(90vh);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #464646;
`

const CoachingWrapper = styled.div`
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
