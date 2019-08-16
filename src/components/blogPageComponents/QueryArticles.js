import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Section } from "../../utils"
import ArticleGrid from "./ArticleGrid"
import ContextConsumer from "../Context"

const GET_POSTS = graphql`
  query {
    getEnPosts: allContentfulArticleEn {
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
    getFrPosts: allContentfulArticleFr {
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
  }
`

export default function Posts() {
  return (
    <ContextConsumer>
      {({ isFarsi }) => (
        <Section>
          {/* <QuickInfo /> */}
          <PostsWrapper>{isFarsi ? FarsiQuery : EnglishQuery}</PostsWrapper>
        </Section>
      )}
    </ContextConsumer>
  )
}

function withData(WrappedComponent) {
  return (
    <StaticQuery
      query={GET_POSTS}
      render={data => <WrappedComponent data={data} />}
    />
  )
}

export const FarsiQuery = withData(({ data }) =>
  data.getFrPosts.edges.map(({ node }) => {
    return <ArticleGrid article={node} key={node.id} />
  })
)

export const EnglishQuery = withData(({ data }) =>
  data.getEnPosts.edges.map(({ node }) => {
    return <ArticleGrid article={node} key={node.id} />
  })
)

const PostsWrapper = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 2rem;
  justify-content: center;
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
  }
  @media (min-width: 1792px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 4rem;
  }
`
