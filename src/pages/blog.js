import React from "react"

import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import QueryArticles from "../components/blogPageComponents/QueryArticles"

const GET_IMAGE = graphql`
  query {
    getImage: file(relativePath: { eq: "bcg/blog2.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const BlogPage = () => {
  return (
    <Layout>
      <StaticQuery
        query={GET_IMAGE}
        render={data => {
          return (
            <ImageWrapper img={data.getImage.childImageSharp.fluid}>
              {/* <Banner title="blog" subtitle={`let's dig in `} /> */}
            </ImageWrapper>
          )
        }}
      />
      <QueryArticles />
    </Layout>
  )
}

// const BlogPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <PageHeader img={img}>
//       <Banner title="menu" subtitle={`let's dig in `} />
//     </PageHeader>
//   </Layout>
// );

export default BlogPage

const ImageWrapper = styled.div`
  background: url(${props => props.img.src});
  min-height: calc(70vh);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #464646;
`
