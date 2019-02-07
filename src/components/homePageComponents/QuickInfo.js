import React, { Component } from "react";
import { Section, Title, SectionButton } from "../../utils";
import styled from "styled-components";
import { styles } from "../../utils";
import { Link } from "gatsby";

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title title="my mission" message="let us tell you" />
        <QuickInfoWrapper>
          <p className="text">
            Amet eiusmod est ut Lorem incididunt ex aute nulla qui duis ullamco
            tempor. Laborum adipisicing minim nulla duis commodo ut pariatur
            minim consectetur exercitation ex laboris excepteur.
          </p>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>
              {" "}
              about{" "}
            </SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    );
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`;
