import React, { Component } from "react"
import InstagramEmbed from "react-instagram-embed"
import { Title, Section, styles } from "../../utils"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
import ArticleGrid_Landing from "../../components/blogPageComponents/ArticleGrid_Landing"
import ContextConsumer from "../Context"

const GET_POSTS = graphql`
  query {
    getEnArticle1: contentfulArticleEn(
      slug: { eq: "are-you-in-control-of-your-life" }
    ) {
      id
      slug
      title
      createdAt
      content {
        childMarkdownRemark {
          excerpt(pruneLength: 200, truncate: true)
        }
      }
      image {
        fluid(maxWidth: 900) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    getEnArticle2: contentfulArticleEn(slug: { eq: "are-you-eating-clean" }) {
      id
      slug
      title
      createdAt
      content {
        childMarkdownRemark {
          excerpt(pruneLength: 200, truncate: true)
        }
      }
      image {
        fluid(maxWidth: 900) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    getEnArticle3: contentfulArticleEn(
      slug: { eq: "the-simple-road-to-glory" }
    ) {
      id
      slug
      title
      createdAt
      content {
        childMarkdownRemark {
          excerpt(pruneLength: 200, truncate: true)
        }
      }
      image {
        fluid(maxWidth: 900) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    getFrArticle1: contentfulArticleFr(slug: { eq: "ashtbah" }) {
      id
      slug
      title
      createdAt
      content {
        childMarkdownRemark {
          excerpt(pruneLength: 200, truncate: true)
        }
      }
      image {
        fluid(maxWidth: 900) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    getFrArticle2: contentfulArticleFr(slug: { eq: "ahsas-taalogh" }) {
      id
      slug
      title
      createdAt
      content {
        childMarkdownRemark {
          excerpt(pruneLength: 200, truncate: true)
        }
      }
      image {
        fluid(maxWidth: 900) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    getFrArticle3: contentfulArticleFr(
      slug: { eq: "be-jaryan-zndegy-etemad-konym" }
    ) {
      id
      slug
      title
      createdAt
      content {
        childMarkdownRemark {
          excerpt(pruneLength: 200, truncate: true)
        }
      }
      image {
        fluid(maxWidth: 900) {
          ...GatsbyContentfulFluid_withWebp
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
          <Title
            title="Blog Post"
            message={"What Are the Most Favourite Posts?"}
          />
          <StaticQuery
            query={GET_POSTS}
            render={data => {
              return (
                <FavouritePostsWrapper>
                  <ArticleGrid_Landing
                    article={isFarsi ? data.getFrArticle1 : data.getEnArticle1}
                    key={
                      isFarsi ? data.getFrArticle1.id : data.getEnArticle1.id
                    }
                  />
                  <ArticleGrid_Landing
                    article={isFarsi ? data.getFrArticle2 : data.getEnArticle2}
                    key={
                      isFarsi ? data.getFrArticle2.id : data.getEnArticle2.id
                    }
                  />
                  <ArticleGrid_Landing
                    article={isFarsi ? data.getFrArticle3 : data.getEnArticle3}
                    key={
                      isFarsi ? data.getFrArticle3.id : data.getEnArticle3.id
                    }
                  />
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
