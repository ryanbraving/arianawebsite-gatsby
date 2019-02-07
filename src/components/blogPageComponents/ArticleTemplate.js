import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

export const GET_ARTICLE = graphql`
  query ArticleTemplate($id: String!) {
    getArticle: contentfulArticleEn(id: { eq: $id }) {
      id
      title
      image {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      childContentfulArticleEnContentTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default function ArticleTemplate({ data }) {
  return (
    <div>
      <h1> {data.getArticle.title}</h1>
      <Img fluid={data.getArticle.image.fluid} />
      <p
        dangerouslySetInnerHTML={{
          __html:
            data.getArticle.childContentfulArticleEnContentTextNode
              .childMarkdownRemark.html
        }}
      />
    </div>
  );
}
