import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Section } from "../utils"
import styled from "styled-components"
import VideoGrid from "../components/podcastPageComponents/VideoGrid"

// this is page so it is required to use page query not static query
export const GET_Videos = graphql`
  query QueryVideos {
    getFrVideos: allContentfulVideocastFr {
      edges {
        node {
          id
          title
          subtitle
          sourceUrl
          tags
          imageCover {
            fluid(maxWidth: 900) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default class podcast extends Component {
  render() {
    const { edges } = this.props.data.getFrVideos
    return (
      <Layout>
        <Section>
          <PodcastWrapper>
            {edges.map(({ node }) => {
              return <VideoGrid video={node} key={node.id} />
            })}
            {edges.map(({ node }) => {
              return <VideoGrid video={node} key={node.id} />
            })}
          </PodcastWrapper>
        </Section>
      </Layout>
    )
  }
}

const PodcastWrapper = styled.div`
  margin: 4rem auto;
  background-color: "red";
  /* margin: 3rem auto; */
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 2rem;
  /* text-align: center; */
  justify-content: center;
  /* justify-items: center; */
  /* align-items: center; */

  /* video {
    max-width: 20rem;
  }
  @media (min-width: 576px) {
    grid-template-columns: 95%;
    video {
      max-width: 25rem;
    }
  }
  @media (min-width: 676px) {
    grid-template-columns: 90%;
    video {
      max-width: 25rem;
    }
  }
  @media (min-width: 880px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr;
  } */

  /* video {
    width: 90%;
  }
  @media (min-width: 768px) {
    grid-template-columns: 90%;
  }
  @media (min-width: 992px) {
    grid-template-columns: 80%;
  }
  @media (min-width: 1192px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1592px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    video {
      width: 100%;
    } */

  video {
    width: 90%;
  }
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
    grid-gap: 2rem;
    video {
      width: 100%;
    }
  }
`
