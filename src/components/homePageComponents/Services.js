import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import { Section, Title, ServiceButton } from "../../utils";
import styled from "styled-components";

const GET_IMAGES = graphql`
  query {
    getImages: allFile(
      filter: { relativeDirectory: { eq: "serviceGallery" } }
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
export default function Service() {
  return (
    <StaticQuery
      query={GET_IMAGES}
      render={data => {
        return (
          <Section>
            <Title title="Ariana's Services" message={"How Can I Help You?"} />
            <ServiceWrapper>
              {data.getImages.edges.map(({ node }, index) => {
                index = index + 1;
                return (
                  <div className={`item item-${index}`} key={index}>
                    <Img fluid={node.childImageSharp.fluid} />
                    {index === 1 ? (
                      <div>
                        <h2 className="service"> One on One Coaching </h2>
                        <p className="text">
                          Amet eiusmod est ut Lorem incididunt ex aute nulla qui
                          duis ullamco tempor. Laborum adipisicing minim nulla
                          duis commodo ut pariatur minim consectetur
                          exercitation ex laboris excepteur.
                        </p>
                        <ServiceButton style={{ margin: " 0rem auto" }}>
                          More Info
                        </ServiceButton>
                      </div>
                    ) : index === 2 ? (
                      <div>
                        <h2 className="service"> Online Courses </h2>
                        <p className="text">
                          Amet eiusmod est ut Lorem incididunt ex aute nulla qui
                          duis ullamco tempor. Laborum adipisicing minim nulla
                          duis commodo ut pariatur minim consectetur
                          exercitation ex laboris excepteur.
                        </p>
                        <ServiceButton style={{ margin: " 0rem auto" }}>
                          Let's go
                        </ServiceButton>
                      </div>
                    ) : (
                      <div>
                        <h2 className="service"> Free Resources </h2>
                        <p className="text">
                          Amet eiusmod est ut Lorem incididunt ex aute nulla qui
                          duis ullamco tempor. Laborum adipisicing minim nulla
                          duis commodo ut pariatur minim consectetur
                          exercitation ex laboris excepteur.
                        </p>
                        <ServiceButton style={{ margin: " 0rem auto" }}>
                          Help Yourself
                        </ServiceButton>
                      </div>
                    )}

                    {/* <h2 className="service">
                      {" "}
                      {index == 1
                        ? "One on One Coaching"
                        : index == 2
                        ? "Online Courses"
                        : "Free Resources"}
                    </h2> */}
                  </div>
                );
              })}
            </ServiceWrapper>
          </Section>
        );
      }}
    />
  );
}

const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .service {
    margin-top: 1rem;
    text-align: center;
    letter-spacing: 0.1rem;
  }
  .text {
    padding: 1rem 2rem;
    text-align: justify;
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
  }

  @media (min-width: 980px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`;
