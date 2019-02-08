import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { Section } from "../../utils";
import ArticleGrid from "./ArticleGrid";
import QuickInfo from "../homePageComponents/QuickInfo";

const GET_POSTS = graphql`
  query {
    getEnPosts: allContentfulArticleEn {
      edges {
        node {
          id
          slug
          title
          createdAt
          content {
            childMarkdownRemark {
              excerpt(pruneLength: 200)
              html
            }
          }
          image {
            fluid(maxWidth: 900) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default function Posts() {
  return (
    <Section>
      <QuickInfo />
      <PostsWrapper>
        <StaticQuery
          query={GET_POSTS}
          render={data => {
            return data.getEnPosts.edges.map(({ node }) => {
              return <ArticleGrid article={node} key={node.id} />;
            });
          }}
        />
      </PostsWrapper>
    </Section>
  );
}

const PostsWrapper = styled.div`
  /* background: red; */
  margin: 3rem 0;
  display: grid;
  /* grid-template-columns: auto; */
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
    grid-gap: 2rem;
  }
  @media (min-width: 1192px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  /* @media (min-width: 1392px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  } */
`;
