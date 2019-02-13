import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";
import { styles } from "../../utils";

export default function Article({ article }) {
  const { slug } = article;
  const { title } = article;
  const { fluid } = article.image;
  const { excerpt } = article.content.childMarkdownRemark;
  return (
    <ArticleGridWrapper>
      <Link to={`/${slug}`} className="article-link">
        <li>
          <h3 className="title">{title}</h3>
          <Img className="image" fluid={fluid} />
          <p
            className="excerpt"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <button> read more </button>
        </li>
      </Link>
    </ArticleGridWrapper>
  );
}

const ArticleGridWrapper = styled.ul`
  padding: 1rem;
  border-radius: 5px 5px 5px 5px;
  -moz-border-radius: 5px 5px 5px 5px;
  -webkit-border-radius: 5px 5px 5px 5px;
  ${styles.border({ width: "0.2rem", color: "#ddd" })};
  ${styles.transition({ time: "1s" })};
  &:hover {
    border-radius: 40px 40px 40px 40px;
    -moz-border-radius: 40px 40px 40px 40px;
    -webkit-border-radius: 40px 40px 40px 40px;
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainWhite};
    ${styles.border({ width: "0.2rem", color: `${styles.colors.mainYellow}` })};
    .article-link {
      color: ${styles.colors.mainWhite};
      ${styles.transition({ time: "1s" })};
    }
    button {
      color: ${styles.colors.mainWhite};
      ${styles.border({ color: `${styles.colors.mainWhite}` })};
      ${styles.transition({ time: "1s" })};
    }
    .title {
      text-align: center;
    }
  }
  .article-link {
    text-decoration: none;
    color: ${styles.colors.mainBlack};
    &:hover {
      cursor: pointer;
    }
  }
  li {
    list-style-type: none;
  }
  .title {
    text-transform: capitalize;
    letter-spacing: 0rem;
  }
  .image {
    margin: 1rem 0rem;
    min-height: 250px;
    border-radius: 20px;
  }
  .excerpt {
    line-height: 1.5rem;
    text-align: justify;
  }
  button {
    margin: 1rem 0 0 0;
    color: ${styles.colors.mainBlack};
    ${styles.border({ color: `${styles.colors.mainBlack}` })};
    background: transparent;
    padding: 0.3rem 0.5rem;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0rem;
    font-weight: 700;
    &:hover {
      background: ${styles.colors.mainWhite};
      color: ${styles.colors.mainBlack};
      ${styles.border({ color: `${styles.colors.mainYellow}` })};
      cursor: pointer;
    }
  }
`;
