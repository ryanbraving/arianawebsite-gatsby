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
import Testimony from "../components/homePageComponents/Testimony3"
// import Gallery2 from "../components/homePageComponents/Gallery2";
// import Gallery1 from "../components/homePageComponents/Gallery1";
// import Gallery from "../components/homePageComponents/Gallery";
// import Menu from "../components/homePageComponents/Menu";
import Services from "../components/homePageComponents/Services"
import Favourite from "../components/homePageComponents/Favourite"
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

class IndexPage extends Component {
  state = {
    windowWidth: undefined,
  }
  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener("resize", this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
    )
  }
}

// const IndexPage = ({ data }) => {

//   return (

//   )
// }

export default IndexPage
