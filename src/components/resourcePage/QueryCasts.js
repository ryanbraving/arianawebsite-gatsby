import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Section } from "../../utils"
import styled from "styled-components"
import CastGrid from "./CastGrid"

// this is page so it is required to use page query not static query
const GET_CASTS = graphql`
  query QueryCasts {
    getFrVideos: allContentfulVideocastFr {
      edges {
        node {
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
    }
    getFrPodcast: allContentfulPodcastFr {
      edges {
        node {
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
    }
    getFrInspirational: allContentfulInspirationalQuotesFr {
      edges {
        node {
          id
          title
          subtitle
          tags
          image {
            fluid(maxWidth: 900) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
// getFrVideos: allContentfulVideocastFr {
//   edges {
//     node {
//       id
//       title
//       subtitle
//       sourceUrl
//       tags
//       image {
//         fluid(maxWidth: 900) {
//           ...GatsbyContentfulFluid_withWebp
//         }
//       }
//     }
//   }
// }

export default class QueryCasts extends Component {
  render() {
    const { type } = this.props
    return (
      <Section>
        <StaticQuery
          query={GET_CASTS}
          render={data => {
            const { edges } =
              type === "video"
                ? data.getFrVideos
                : type === "podcast"
                ? data.getFrPodcast
                : data.getFrInspirational
            return (
              <CastWrapper>
                {edges.map(({ node }) => {
                  return <CastGrid cast={node} key={node.id} type={type} />
                })}
              </CastWrapper>
            )
          }}
        />
      </Section>
    )
  }
}

const CastWrapper = styled.div`
  margin: 3rem 3rem;
  background-color: "red";
  /* margin: 3rem auto; */
  display: grid;
  grid-template-columns: 100%;
  grid-auto-columns: auto;
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

  /* video {
    width: 90%;
  } */
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 676px) {
    grid-template-columns: 90%;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 8rem;
  }
  @media (min-width: 1192px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4rem;
  }
  @media (min-width: 1792px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 4rem;
  }
`
