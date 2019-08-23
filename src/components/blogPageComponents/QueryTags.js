import React, { Component } from "react"
import Layout from "../layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Section, Title } from "../../utils"
import ArticleGrid from "./ArticleGrid"
import CastGrid from "../resourcePage/CastGrid"

import ContextConsumer from "../Context"

// this template is getting called through gatsby-node.js in pageCreate.
// So it is required to use page query not static query
export const GET_POSTS = graphql`
  query QueryTags($tag: String!) {
    getEnPosts: allContentfulArticleEn(filter: { tags: { eq: $tag } }) {
      totalCount
      edges {
        node {
          id
          slug
          title
          tags
          createdAt
          content {
            childMarkdownRemark {
              excerpt(pruneLength: 200, truncate: false)
              html
            }
          }
          image {
            fluid(maxWidth: 900) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
    getFrPosts: allContentfulArticleFr(filter: { tags: { eq: $tag } }) {
      totalCount
      edges {
        node {
          id
          slug
          title
          tags
          createdAt
          content {
            childMarkdownRemark {
              excerpt(pruneLength: 200, truncate: true)
              html
            }
          }
          image {
            fluid(maxWidth: 900) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
    getFrVideos: allContentfulVideocastFr(filter: { tags: { eq: $tag } }) {
      totalCount
      edges {
        node {
          id
          title
          subtitle
          tags
          image {
            fluid(maxWidth: 900) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
    getFrPodcasts: allContentfulPodcastFr(filter: { tags: { eq: $tag } }) {
      totalCount
      edges {
        node {
          id
          title
          subtitle
          tags
          image {
            fluid(maxWidth: 900) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
    getFrInspirational: allContentfulInspirationalQuotesFr(
      filter: { tags: { eq: $tag } }
    ) {
      totalCount
      edges {
        node {
          id
          title
          subtitle
          tags
          image {
            fluid(maxWidth: 900) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
export default class Posts extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentDidMount() {
    this.myRef.current.click()
  }
  render() {
    const { data, pageContext } = this.props
    const { language, tag } = pageContext
    return (
      <ContextConsumer>
        {({ setLanguageInvisible, setFarsi, setEnglish, handleLanding }) => (
          <Layout>
            <Section>
              <HeaderWrapper>
                {language === "farsi" ? (
                  <Title title={tag} message="نوشته های برچسب شده" />
                ) : (
                  <Title title={tag} message="Posts Taged" />
                )}
              </HeaderWrapper>
              <PostWrapper
                ref={this.myRef}
                onClick={() => {
                  setLanguageInvisible()
                  language === "farsi" ? setFarsi() : setEnglish()
                  handleLanding()
                }}
              >
                {language === "farsi"
                  ? data.getFrPosts.edges.map(({ node }) => {
                      return <ArticleGrid article={node} key={node.id} />
                    })
                  : data.getEnPosts.edges.map(({ node }) => {
                      return <ArticleGrid article={node} key={node.id} />
                    })}
                {data.getFrVideos.edges.map(({ node }) => {
                  return <CastGrid cast={node} key={node.id} type={"video"} />
                })}
                {data.getFrPodcasts.edges.map(({ node }) => {
                  return <CastGrid cast={node} key={node.id} type={"podcast"} />
                })}
                {data.getFrInspirational.edges.map(({ node }) => {
                  return (
                    <CastGrid cast={node} key={node.id} type={"inspiration"} />
                  )
                })}
              </PostWrapper>
              {/* <HeaderWrapper>
                {language === "farsi" ? (
                  <Title title={tag} message="ویدیو های برچسب شده" />
                ) : (
                  <Title title={tag} message="Posts Taged" />
                )}
              </HeaderWrapper> */}
              {/* <PostWrapper
                ref={this.myRef}
                onClick={() => {
                  setLanguageInvisible()
                  language === "farsi" ? setFarsi() : setEnglish()
                }}
              >
                {language === "farsi"
                  ? data.getFrVideos.edges.map(({ node }) => {
                      return <VideoGrid video={node} key={node.id} />
                    })
                  : data.getFrVideos.edges.map(({ node }) => {
                      return <VideoGrid video={node} key={node.id} />
                    })}
              </PostWrapper> */}
            </Section>
          </Layout>
        )}
      </ContextConsumer>
    )
  }
}

// function withData(WrappedComponent) {
//   return (
//     <StaticQuery
//       query={GET_POSTS}
//       render={data => <WrappedComponent data={data} />}
//     />
//   )
// }

// export const FarsiQuery = withData(({ data }) =>
//   data.getFrPosts.edges.map(({ node }) => {
//     return <ArticleGrid article={node} key={node.id} />
//   })
// )

// export const EnglishQuery = withData(({ data }) =>
//   data.getEnPosts.edges.map(({ node }) => {
//     return <ArticleGrid article={node} key={node.id} />
//   })
// )
const HeaderWrapper = styled.div`
  margin: 4rem auto;
`

const PostWrapper = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 2rem;
  justify-content: center;
  /* justify-items: center;
  align-items: center; */

  video {
    width: 90%;
  }
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 676px) {
    grid-template-columns: 90%;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 8rem;
  }
  @media (min-width: 1192px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4rem;
    /* video {
      width: 100%;
    } */
  }
  @media (min-width: 1792px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 4rem;
  }
`
