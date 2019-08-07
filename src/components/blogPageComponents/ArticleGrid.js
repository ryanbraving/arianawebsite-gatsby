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
              <div className="parentDiv">
                <Img className="image" fluid={fluid} />
                {isFarsi ? (
                  <p className="infoFr">نوشتاری</p>
                ) : (
                  <p className="info">Article</p>
                )}
              </div>
              <h2 className={isFarsi ? "title titleFarsi" : "title"}>
                {title}
              </h2>
              <p className={isFarsi ? "excerpt excerptFarsi" : "excerpt"}>
                {renderHTML(excerpt)}
              </p>
              {/* <p
                className={isFarsi ? "excerpt excerptFarsi" : "excerpt"}
                dangerouslySetInnerHTML={{
                  __html: excerpt,
                }}
              /> */}
              {/* <div
                className={
                  isFarsi ? "flexContainerFarsi" : "flexContainerEnglish"
                }
              >
                <button className={isFarsi ? "btnFarsi" : "btnEnglish"}>
                  {" "}
                  {isFarsi ? "ادامه مطلب" : "read more"}{" "}
                </button>
              </div> */}
            </li>
          </Link>
        </ArticleGridWrapper>
      )}
    </ContextConsumer>
  )
}

const ArticleGridWrapper = styled.ul`
  /* text-align: center; */
  padding: 1rem;
  border-radius: 5px 5px 5px 5px;
  -moz-border-radius: 5px 5px 5px 5px;
  -webkit-border-radius: 5px 5px 5px 5px;
  ${styles.transition({ time: "0.7s" })};
  &:hover {
    -webkit-box-shadow: 0px 0px 9px 7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 9px 7px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 9px 7px rgba(0, 0, 0, 0.75);
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
  }
  .excerpt {
    line-height: 1.5rem;
    text-align: justify;
  }
  .excerptFarsi {
    direction: rtl;
  }
  /* .flexContainerFarsi {
    display: flex;
    justify-content: center;
  }
  .flexContainerEnglish {
    display: flex;
    justify-content: center;
  }
  button {
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
  } */
  .parentDiv {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    color: ${styles.colors.mainWhite};
    background: ${styles.colors.mainYellow};
    text-transform: capitalize;
    padding: 0.2rem 0.3rem;
  }
  .infoFr {
    position: absolute;
    top: 0;
    right: 0;
    color: ${styles.colors.mainWhite};
    background: ${styles.colors.mainYellow};
    text-transform: capitalize;
    padding: 0.2rem 0.3rem;
  }
`
