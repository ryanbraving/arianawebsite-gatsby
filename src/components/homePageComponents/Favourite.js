import React from "react"
import { Title, Section } from "../../utils"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import ArticleGridLanding from "../blogPageComponents/ArticleGrid_Landing"
import ContextConsumer from "../Context"

const GET_POSTS = graphql`
  query {
    getEnPosts: allContentfulArticleEn(
      filter: { isFavourite: { eq: true } }
      limit: 3
      sort: { fields: [updatedAt], order: DESC }
    ) {
      edges {
        node {
          id
          slug
          title
          tags
          createdAt
          updatedAt
          isFavourite
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
    getFrPosts: allContentfulArticleFr(
      filter: { isFavourite: { eq: true } }
      limit: 3
      sort: { fields: [updatedAt], order: DESC }
    ) {
      edges {
        node {
          id
          slug
          title
          tags
          createdAt
          updatedAt
          isFavourite
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
export default function Favourite() {
  return (
    <ContextConsumer>
      {({ isFarsi }) => (
        <Section>
          {isFarsi ? (
            <Title
              title="نوشته‌های برگزیده"
              message={"پر خواننده‌ترین نوشته‌ها کدام‌ها هستند؟"}
            />
          ) : (
            <Title
              title="Blog Post"
              message={"What Are the Most Favourite Posts?"}
            />
          )}
          <StaticQuery
            query={GET_POSTS}
            render={data => {
              return (
                <FavouritePostsWrapper>
                  {isFarsi
                    ? data.getFrPosts.edges.map(({ node }) => {
                        return (
                          <ArticleGridLanding article={node} key={node.id} />
                        )
                      })
                    : data.getEnPosts.edges.map(({ node }) => {
                        return (
                          <ArticleGridLanding article={node} key={node.id} />
                        )
                      })}
                </FavouritePostsWrapper>
              )
            }}
          />
        </Section>
      )}
    </ContextConsumer>
  )
}

const FavouritePostsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
  }

  @media (min-width: 980px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`
