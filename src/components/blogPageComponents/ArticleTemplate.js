import React from "react";
import Layout from "../layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import {
  Section,
  SectionButton,
  timeDifferenceForDate,
  styles
} from "../../utils";
import styled from "styled-components";

export const GET_ARTICLE = graphql`
  query ArticleTemplate($id: String!) {
    getArticle: contentfulArticleEn(id: { eq: $id }) {
      id
      title
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
  }
`;

export default function ArticleTemplate({ data }) {
  return (
    <Layout>
      <Section>
        <TemplateWrapper>
          <h1> {data.getArticle.title}</h1>
          <p className="postedBy">
            Posted by{" "}
            <Link to="/about" className="ariana">
              ARIANA BRAVING
            </Link>
            , {timeDifferenceForDate(data.getArticle.createdAt)}
          </p>
          <Img className="image" fluid={data.getArticle.image.fluid} />
          <p
            className="text"
            dangerouslySetInnerHTML={{
              __html:
                data.getArticle.childContentfulArticleEnContentTextNode
                  .childMarkdownRemark.html
            }}
          />
          <SectionButton style={{ margin: "2rem auto" }}> about </SectionButton>
        </TemplateWrapper>
      </Section>
    </Layout>
  );
}

const TemplateWrapper = styled.div`
  margin: 5rem auto;
  h1 {
    margin: 1rem auto;
    text-shadow: 3px 0px 1px grey;
    text-align: center;
    text-transform: capitalize;
    font-size: 3rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
  }
  .image {
    max-width: 800px;
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
`;
