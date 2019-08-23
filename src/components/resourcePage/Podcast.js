import React, { Component } from "react"

import Layout from "../layout"
import { graphql, Link } from "gatsby"
import { Section, styles } from "../../utils"
import Img from "gatsby-image"
import styled from "styled-components"
import ContextConsumer from "../Context"
import ShareSocialNet from "../blogPageComponents/ShareSocialNetwork"

export const GET_PODCAST = graphql`
  query QueryPodcast($id: String!) {
    getFrPodcast: contentfulPodcastFr(id: { eq: $id }) {
      id
      title
      subtitle
      sourceUrl
      tags
      image {
        fluid(maxWidth: 900) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
export default class Podcast extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentDidMount() {
    this.myRef.current.click()
  }

  render() {
    // const { language } = this.props.pageContext // this is comming from gatsby-node.js
    const { data } = this.props
    const url = "cast/".concat(data.getFrPodcast.id)
    return (
      <ContextConsumer>
        {({ setLanguageInvisible, setFarsi, handleLanding }) => (
          <Layout>
            <Section>
              <TemplateWrapper
                ref={this.myRef}
                onClick={() => {
                  setLanguageInvisible()
                  setFarsi()
                  handleLanding()
                }}
              >
                {FarsiTemplate(data)}
                <div className="socialNetwork">
                  <div>
                    <h5>...این فایل صوتی را با دیگران به اشتراک گذارید</h5>
                    {/* <br /> */}
                    <ShareSocialNet url={url} title={data.getFrPodcast.title} />
                  </div>
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
    <div className="farsiText">
      <h1>{data.getFrPodcast.title}</h1>
      <h3>{data.getFrPodcast.subtitle}</h3>
      <div className="underline1" />
      <div className="underline2" />
      <div className="underline3" />
      <div className="underline4" />
      <Img className="image sizing" fluid={data.getFrPodcast.image.fluid} />
      <audio controls className="sizing">
        <source src={data.getFrPodcast.sourceUrl} type="audio/ogg" />
        <source src={data.getFrPodcast.sourceUrl} type="audio/mpeg" />
        <source src={data.getFrPodcast.sourceUrl} type="audio/wav" />
        Your browser does not support the audio tag.
      </audio>

      <div className="tagDiv">
        <p>
          <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            {" "}
            بر چسب ها:{" "}
          </span>

          {data.getFrPodcast.tags.map((tag, index) => {
            return (
              <Link
                to={`/tag/${tag
                  .split(" ")
                  .join("-")
                  .toLowerCase()}`}
                className="tag"
                key={index}
              >
                <li>{tag}</li>
              </Link>
            )
          })}
        </p>
      </div>
    </div>
  )
}

const TemplateWrapper = styled.div`
  margin: 5rem auto;
  text-align: center;
  /* justify-content: center; */
  /* justify-items: center; */
  align-items: center;
  
  .image {
    margin: 1rem auto;
    /* min-height: 250px;
    max-height:350px; */
  }
  .socialNetwork{
    text-align: center;
    margin-top: 4rem;
    h5{
      color: grey;
      margin-bottom: 1rem;
    }

  }
  
  h1 {
    line-height: 5rem;
    letter-spacing: 0.0rem;
    font-size: 2rem;
    color: ${styles.colors.mainYellow};

    /* margin: 1rem auto;
    text-shadow: 3px 0px 1px grey;
    text-align: center;
    text-transform: capitalize;
    font-size: 3rem;
    letter-spacing: 0.1rem;
    font-weight: 700; */
  }
  h3{
    color: ${styles.colors.mainGrey};
    letter-spacing: 0.0rem;
    /* font-size: 1rem; */
  }
  .underline1 {
    width: 7rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 1rem auto;
  }
  .underline2 {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 1rem auto;
  }
  .underline3 {
    width: 3rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 1rem auto;
  }
  .underline4 {
    width: 1rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 1rem auto;
  }
  li {
    display: inline;
    list-style-type: none;
    /* padding-right: 20px; */
  }
  .tagDiv{
    margin: 1rem auto;
    color: ${styles.colors.mainGrey};
    
  }
  .farsiText{
    direction: rtl;
    font-family: Vazir;
    letter-spacing: 0;
  }
  
  /* .text {
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
  } */

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

  @media (min-width: 576px) {
    .sizing{
      width: 95%;
    }
  }
  @media (min-width: 676px) {
    .sizing{
      width: 90%;
    }
  }
  @media (min-width: 768px) {
    .sizing{
      width: 70%;
    }
  }
  @media (min-width: 1192px) {
    .sizing{
      width: 50%;
    }
  }
  
`
