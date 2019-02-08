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
          <h3>{title}</h3>
          <Img className="image" fluid={fluid} />
          <p
            className="excerpt"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          {/* <Link to={`/${slug}`} style={{ textDecoration: "none" }}> */}
          <button> read more </button>
          {/* </Link> */}
        </li>
      </Link>
    </ArticleGridWrapper>
  );
}

const ArticleGridWrapper = styled.ul`
padding: 1rem;
${styles.border({ width: "0.2rem", color: "#ddd" })};
${styles.transition({ time: "1s" })};
&:hover {
  background: ${styles.colors.mainBlack};
  color: ${styles.colors.mainWhite};
  cursor: pointer;
  ${styles.border({ width: "0.2rem", color: `${styles.colors.mainYellow}` })};
  .article-link{
    color: ${styles.colors.mainWhite};
    ${styles.transition({ time: "1s" })};
  }
  button{
    color: ${styles.colors.mainWhite};
    ${styles.border({ color: `${styles.colors.mainWhite}` })};
    ${styles.transition({ time: "1s" })};
  }
}


  li {
    list-style-type: none;
    /* margin-top: 1rem; */
    /* background: red; */
  }
  .article-link {
    text-decoration: none;
    color: ${styles.colors.mainBlack};
    
  }
  .image {
    margin: 1rem 0rem;
    min-height:250px;
    /* max-height:300px; */
    /* height: 330px; */
    border-radius: 20px;
    /* ${styles.border({
      width: "5px",
      type: "solid",
      color: "#ddd"
    })}; */
    /* border: 5px solid #ddd; */


    
  }
  .excerpt {
    line-height: 1.5rem;
    /* color: ${styles.colors.mainGrey}; */
    /* word-spacing: 0.2rem; */
    text-align: justify;
    /* display:block; */

  }
  button{
    margin: 1rem 0 0 0;
    display: inline;
    color: ${styles.colors.mainBlack};
    ${styles.border({ color: `${styles.colors.mainBlack}` })};
    background: transparent;
    padding: 0.3rem 0.5rem;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.0rem;
    font-weight: 700;
    /* ${styles.transition({ time: "1s" })}; */
    &:hover {
      background: ${styles.colors.mainWhite};
      color: ${styles.colors.mainBlack};
      ${styles.border({ color: `${styles.colors.mainYellow}` })};
      cursor: pointer;


    }
  }
`;
