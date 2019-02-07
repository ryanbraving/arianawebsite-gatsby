import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { Section } from "../../utils";
import ArticleGrid from "./ArticleGrid";

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
              excerpt(pruneLength: 300)
              html
            }
          }
          image {
            fixed(width: 400, height: 250) {
              ...GatsbyContentfulFixed_tracedSVG
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
      <PostsWrapper>
        <StaticQuery
          query={GET_POSTS}
          render={data => {
            return data.getEnPosts.edges.map(({ node }) => {
              return <ArticleGrid article={node} />;
            });
          }}
        />
      </PostsWrapper>
    </Section>
  );
}

const PostsWrapper = styled.div`
  background: red;
`;
