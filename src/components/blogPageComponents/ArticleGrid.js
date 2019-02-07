import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";

export default function Article({ article }) {
  const { id } = article;
  const { slug } = article;
  const { title } = article;
  const { fixed } = article.image;
  const { excerpt } = article.content.childMarkdownRemark;
  return (
    <ArticleGridWrapper>
      <li key={id}>
        <h1>
          <Link to={`/${slug}`} className="article-link">
            {title}
          </Link>
        </h1>
        <Img fixed={fixed} />
        <p dangerouslySetInnerHTML={{ __html: excerpt }} />
      </li>
    </ArticleGridWrapper>
  );
}

const ArticleGridWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .article-link {
    text-decoration: none;
  }
`;
