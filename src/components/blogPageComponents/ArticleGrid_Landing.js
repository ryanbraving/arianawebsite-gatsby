import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"
import ContextConsumer from "../Context"
import renderHTML from "react-render-html"

export default function Article({ article }) {
  const { slug, title } = article
  const { fluid } = article.image
  const { excerpt } = article.content.childMarkdownRemark
  return (
    <ContextConsumer>
      {({ isFarsi }) => (
        <ArticleGridWrapper>
          <Link to={`/${slug}`} className="article-link">
            <li>
              <Img className="image" fluid={fluid} />
              <h3 className={isFarsi ? "title titleFarsi" : "title"}>
                {title}
              </h3>
              <p className={isFarsi ? "excerpt excerptFarsi" : "excerpt"}>
                {renderHTML(excerpt)}
              </p>

              <button> {isFarsi ? "ادامه مطلب" : "read more"} </button>
            </li>
          </Link>
        </ArticleGridWrapper>
      )}
    </ContextConsumer>
  )
}

const ArticleGridWrapper = styled.ul`
  position: relative;
  padding: 1rem 0.5rem 6rem 0.5rem;
  border-radius: 5px 5px 5px 5px;
  -moz-border-radius: 5px 5px 5px 5px;
  -webkit-border-radius: 5px 5px 5px 5px;
  ${styles.transition({ time: "0.7s" })};
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
    text-align: center;
    text-transform: capitalize;
    letter-spacing: 0rem;
    margin: 1rem;
  }
  .titleFarsi {
    direction: rtl;
  }
  .image {
    margin: 1rem 0rem;
    min-height: 250px;
    /* border-radius: 20px; */
  }
  .excerpt {
    line-height: 1.5rem;
    text-align: justify;
  }
  .excerptFarsi {
    direction: rtl;
  }
  button {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Vazir;
    margin: 1rem 0 0 0;
    color: ${styles.colors.mainGrey};
    ${styles.border({ color: `${styles.colors.mainGrey}` })};
    background: transparent;
    padding: 0.3rem 0.5rem;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0rem;
    font-weight: 700;
    &:hover {
      ${styles.transition({ time: "0.7s" })};
      background: ${styles.colors.mainBlack};
      color: ${styles.colors.mainWhite};
      ${styles.border({ color: `${styles.colors.mainBlack}` })};
      cursor: pointer;
    }
  }
`
