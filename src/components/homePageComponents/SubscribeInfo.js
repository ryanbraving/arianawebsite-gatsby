import React, { Component } from "react";
import { Section, Title, SectionButton } from "../../utils";
import styled from "styled-components";
import { styles, SubscribeForm } from "../../utils";

export default class SubscribeInfo extends Component {
  render() {
    return (
      <Section>
        <Title title="subscription" message="to be in touch" />
        <SubscriptionWrapper>
          {/* <h1 className="text">
            Subscribe to stay updated and receive freebies!
          </h1> */}
          {/* <SectionButton style={{ margin: "2rem auto" }}>
            {" "}
            subscrib{" "}
          </SectionButton> */}
          <SubscribeForm />
        </SubscriptionWrapper>
      </Section>
    );
  }
}

const SubscriptionWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    text-align: center;
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 50%;
  }
  @media (min-width: 1300px) {
    width: 40%;
  }
  @media (min-width: 1700px) {
    width: 30%;
  }
`;
