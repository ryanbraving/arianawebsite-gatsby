import React, { Component } from "react";
import {
  styles,
  Section,
  Title,
  SubscribeFormFR,
  SubscribeFormEN
} from "../utils";
import styled from "styled-components";
import ContextConsumer from "../components/Context";
var ip = require("ip");
console.log(ip.address());
// var geoip = require("geoip-lite");
// var geo = geoip.lookup(ip.address());
// console.log(geo);

export default class SubscribeInfo extends Component {
  render() {
    return (
      <ContextConsumer>
        {({ isFarsi }) => (
          <Section>
            {isFarsi ? (
              <Title
                title="مشترک شوید"
                message="برای ارتباط با آریانا و دریافت کارهای رایگان"
              />
            ) : (
              <Title
                title="subscribe"
                message="to be in touch with Ariana and receive freebie"
              />
            )}

            <SubscriptionWrapper>
              {/* <h1 className="text">
            Subscribe to stay updated and receive freebies!
          </h1> */}
              {/* <SectionButton style={{ margin: "2rem auto" }}>
            {" "}
            subscrib{" "}
          </SectionButton> */}
              {isFarsi ? <SubscribeFormFR /> : <SubscribeFormEN />}
            </SubscriptionWrapper>
          </Section>
        )}
      </ContextConsumer>
    );
  }
}

const SubscriptionWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  /* .text {
    text-align: center;
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  } */
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
