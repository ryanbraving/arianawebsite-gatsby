// import React from "react";
import React, { Component } from "react"

import Layout from "../layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Section, timeDifferenceForDate, styles } from "../../utils"
import styled from "styled-components"
import ContextConsumer from "../Context"
import ShareSocialNet from "./ShareSocialNetwork"

export const GET_ARTICLE = graphql`
  query ArticleTemplate($id: String!) {
    getEnArticle: contentfulArticleEn(id: { eq: $id }) {
      id
      title
      tags
      slug
      createdAt
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      childContentfulArticleEnContentTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
    getFrArticle: contentfulArticleFr(id: { eq: $id }) {
      id
      title
      tags
      slug
      createdAt
      image {
        fluid(maxWidth: 900, maxHeight: 900, quality: 100) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      childContentfulArticleFrContentTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default class ArticleTemplate extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentDidMount() {
    this.myRef.current.click()
  }

  render() {
    const { language } = this.props.pageContext // this is comming from gatsby-node.js

    return (
      <ContextConsumer>
        {({ setLanguageInvisible, setFarsi, setEnglish, handleLanding }) => (
          <Layout>
            <Section>
              <TemplateWrapper
                ref={this.myRef}
                onClick={() => {
                  setLanguageInvisible()
                  language === "farsi" ? setFarsi() : setEnglish()
                  handleLanding()
                }}
                
              >
                {language === "farsi"
                  ? FarsiTemplate(this.props.data)
                  : EnglishTemplate(this.props.data)}
                <div className="socialNetwork">
                  {language === "farsi" ? (
                    <div>
                      <h5>...این نوشته را با دیگران به اشتراک گذارید</h5>
                      {/* <br /> */}
                      <ShareSocialNet
                        url={this.props.data.getFrArticle.slug}
                        title={this.props.data.getFrArticle.title}
                      />
                    </div>
                  ) : (
                    <div>
                      <h5>Share This Post...</h5>
                      <ShareSocialNet
                        url={this.props.data.getEnArticle.slug}
                        title={this.props.data.getEnArticle.title}
                      />
                    </div>
                  )}
                </div>
              </TemplateWrapper>
            </Section>
          </Layout>
        )}
      </ContextConsumer>
    )
  }
}

export function FarsiTemplate(data) {
  return (
    <div>
      <p className="postedBy farsiText">
        نوشته شده توسط:{" "}
        <Link to="/about" className="ariana farsiText">
          آریانا بریوینگ
        </Link>
        , {timeDifferenceForDate(data.getFrArticle.createdAt, "farsi")}
      </p>
      <Img
        className="image"
        fluid={data.getFrArticle.image.fluid}
        style={{ objectFit: "fill", objectPosition: "50% 50%" }}
      />
      {/* <p className="text farsibody">
        {renderHTML(
          data.getFrArticle.childContentfulArticleFrContentTextNode
            .childMarkdownRemark.html
        )}
      </p> */}
      <div className="text farsiText">
        <p>
          <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            {" "}
            بر چسب ها:{" "}
          </span>

          {data.getFrArticle.tags.map((tag, index) => {
            return (
              <Link to={`/tag/${tag}`} className="tag" key={index}>
                <li>{tag}</li>
              </Link>
            )
          })}
        </p>
      </div>
      <p
        className="text farsibody"
        dangerouslySetInnerHTML={{
          __html:
            data.getFrArticle.childContentfulArticleFrContentTextNode
              .childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

export function EnglishTemplate(data) {
  return (
    <div>
      <h1> {data.getEnArticle.title}</h1>
      <p className="postedBy">
        Posted by{" "}
        <Link to="/about" className="ariana">
          ARIANA BRAVING
        </Link>
        , {timeDifferenceForDate(data.getEnArticle.createdAt, "english")}
      </p>
      <Img className="image" fluid={data.getEnArticle.image.fluid} />
      {/* <p className="text">
        {renderHTML(
          data.getEnArticle.childContentfulArticleEnContentTextNode
            .childMarkdownRemark.html
        )}
      </p> */}
      <div className="text ">
        <p>
          <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Tags: </span>
          {data.getEnArticle.tags.map((tag, index) => {
            return (
              <Link to={`/tag/${tag}`} className="tag" key={index}>
                <li>{tag}</li>
              </Link>
            )
          })}
        </p>
      </div>
      {/* <table className="text">
        <tr>
          {data.getEnArticle.tags.map((tag, index) => {
            return <td key={index}>{tag}</td>
          })}
        </tr>
      </table> */}

      <p
        className="text"
        dangerouslySetInnerHTML={{
          __html:
            data.getEnArticle.childContentfulArticleEnContentTextNode
              .childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

const TemplateWrapper = styled.div`
  margin: 5rem auto;
  .socialNetwork{
    text-align: center;
    margin-top: 4rem;
    h5{
      color: grey;
      margin-bottom: 1rem;
    }

  }
  h1 {
    margin: 1rem auto;
    text-shadow: 3px 0px 1px grey;
    text-align: center;
    text-transform: capitalize;
    font-size: 3rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
  }
  li {
    display: inline;
    list-style-type: none;
    /* padding-right: 20px; */
  }
  .image {
    max-width: 900px;
    /* max-height:500px; */
    margin: 1rem auto;
  }
  .postedBy {
    margin: 1rem auto 0.5rem auto;
    text-align: center;
    letter-spacing: 0.1rem;
  }
  .ariana {
    text-decoration: none;
    color: ${styles.colors.mainBlack};
    letter-spacing: 0rem;
    font-weight: 700;
  }
  .farsiText{
    direction: rtl;
    font-family: Vazir;
    letter-spacing: 0;
  }
  
  .text {
    color: ${styles.colors.mainGrey};

    background: transparent;
    line-height: 2rem;
    word-spacing: 0.2rem;
    text-align: justify;
    margin: 2rem auto;
    @media (min-width: 768px) {
      width: 90%;
    }
    @media (min-width: 992px) {
      width: 80%;
    }
    @media (min-width: 1192px) {
      width: 70%;
    }
    @media (min-width: 1292px) {
      width: 60%;
    }
    @media (min-width: 1592px) {
      width: 50%;
    }
  }
  .farsibody {
    direction: rtl;
    /* font-family: Vazir; */
  }

  .tag {
    /* display: block; */
    white-space: nowrap;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding: 4px 6px 2px 6px;
    color: ${styles.colors.mainWhite};
    background: green;
    /* padding: 0.5rem 1rem; */
    text-transform: uppercase;
    font-size: 1.0rem;
    line-height: 2.5rem;
    letter-spacing: 0rem;
    font-weight: 700;
    border-radius: 7px;
    text-decoration: none;
    border: none;
    ${styles.transition({ time: "0.7s" })};
    border-radius: 5px 5px 5px 5px;
      -moz-border-radius: 5px 5px 5px 5px;
      -webkit-border-radius: 5px 5px 5px 5px;
    
     &:hover {
      /* font-size: 1.3rem; */
      -webkit-box-shadow: 0px 0px 9px 7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 9px 7px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 0px 9px 7px rgba(0, 0, 0, 0.75);
    }
    }
  }
`
