import React, { Component } from "react"
// import Image from "../components/image";
import SEO from "../components/seo"
import Layout from "../components/layout"
// import Img from "gatsby-image";
import IndexDesktopView from "./index_DesktopView"
import IndexMobileView from "./index_MobileView"
// import img from "../images/bcg/homeBcg.jpeg";
// import QuickInfo from "../components/homePageComponents/QuickInfo";
import ArianaDesktopView from "../components/homePageComponents/ArianaDesktopView"
import ArianaMobileView from "../components/homePageComponents/ArianaMobileView"
import Testimony from "../components/homePageComponents/Testimony"
import Services from "../components/homePageComponents/Services"
import Favourite from "../components/homePageComponents/Favourite"
import SubscribeInfo from "../components/homePageComponents/SubscribeInfo"
import ContextConsumer from "../components/Context"
import styled from "styled-components"

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

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: undefined,
      clientInfo: null,
    }
    this.myRef = React.createRef()
  }

  // state = {
  //   windowWidth: undefined,
  // }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener("resize", this.handleResize)

    const url2 = "https://ipinfo.io/json"
    const url1 = "https://api.ipdata.co/?api-key=test"

    fetch(url1)
      .then(response => response.json())
      .then(data => {
        if (!data.ip) {
          fetch(url2)
            .then(response => response.json())
            .then(data => {
              data.provider = "url2: ipinfo"
              data.country_name = data.country
              this.setState({ clientInfo: data })
            })
        } else {
          data.provider = "url1: ipdata"
          this.setState({ clientInfo: data })
        }
        this.myRef.current.click()
      })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  render() {
    if (this.state.clientInfo) {
      var { country_name } = this.state.clientInfo
    } else {
      country_name = "Iran"
    }
    return (
      <ContextConsumer>
        {({ landingDone, handleLanding, setFarsi, setEnglish }) => (
          <IndexWrapper
            ref={this.myRef}
            onClick={() => {
              if (!landingDone) {
                country_name === "Iran" || country_name === "IR"
                  ? setFarsi()
                  : setEnglish()
                handleLanding()
              }
            }}
          >
            {landingDone ? (
              <Layout>
                <SEO
                  title="Home"
                  keywords={[`gatsby`, `application`, `react`]}
                />
                {this.state.windowWidth >= 980 ? (
                  <IndexDesktopView />
                ) : (
                  <IndexMobileView />
                )}
                <Services />
                <Testimony />
                {this.state.windowWidth >= 980 ? (
                  <ArianaDesktopView />
                ) : (
                  <ArianaMobileView />
                )}
                <SubscribeInfo />
                <Favourite />
              </Layout>
            ) : null}
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

const IndexWrapper = styled.div``
const MainWrapper = styled.div``
