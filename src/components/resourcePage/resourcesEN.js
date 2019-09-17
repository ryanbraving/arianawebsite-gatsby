import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import QueryArticles from "../blogPageComponents/QueryArticles"
import ImageResources from "../../images/images_JS/imageResources"

const GET_IMAGE = graphql`
  query {
    getImage: file(relativePath: { eq: "bcg/blog2.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default class BlogPage extends Component {
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
      <React.Fragment>
        <StaticQuery
          query={GET_IMAGE}
          render={data => {
            return (
              <React.Fragment>
                {this.state.windowWidth >= 980 ? (
                  <ImageWrapper img={data.getImage.childImageSharp.fluid} />
                ) : (
                  <ImageResources />
                )}
              </React.Fragment>
            )
          }}
        />
        <QueryArticles />
      </React.Fragment>
    )
  }
}

// const BlogPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <PageHeader img={img}>
//       <Banner title="menu" subtitle={`let's dig in `} />
//     </PageHeader>
//   </Layout>
// );

const ImageWrapper = styled.div`
  background: url(${props => props.img.src});
  min-height: calc(75vh);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #464646;
`
