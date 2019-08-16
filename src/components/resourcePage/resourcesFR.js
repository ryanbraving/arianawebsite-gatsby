import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import { styles } from "../../utils"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ResourceTabs from "./resourceTabs"
import ContextConsumer from "../Context"
import ResourceTabWeblogFR from "./ResourceTab_Weblog_FR"
import ResourceTabVideocastFR from "./ResourceTab_Videocast_FR"
import ResourceTabPodcastFR from "./ResourceTab_Podcast_FR"
import ResourceTabInspirationalQuotesFR from "./ResourceTab_InspirationalQuotes_FR"

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

const GET_IMAGE = graphql`
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

class Resources extends Component {
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
    // const { data } = this.props
    return (
      <ContextConsumer>
        {({ isFarsi }) => (
          <StaticQuery
            query={GET_IMAGE}
            render={data => {
              return (
                <ResourceWrapper>
                  <ImageWrapper img={data.getImage.childImageSharp.fluid} />
                  <ResourceTabs tabNo={this.tabNo} />

                  {isFarsi && this.state.tabNo === 0 ? (
                    <ResourceTabWeblogFR />
                  ) : isFarsi && this.state.tabNo === 1 ? (
                    <ResourceTabVideocastFR />
                  ) : isFarsi && this.state.tabNo === 2 ? (
                    <ResourceTabPodcastFR />
                  ) : (
                    <ResourceTabInspirationalQuotesFR />
                  )}
                </ResourceWrapper>
              )
            }}
          />
        )}
      </ContextConsumer>
    )
  }
}

// AboutPage.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default withStyles(stylesTheme)(Resources)

const ImageWrapper = styled.div`
  background: url(${props => props.img.src});
  min-height: calc(90vh);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #464646;
`

const ResourceWrapper = styled.div`
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
