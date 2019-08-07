import React, { Component } from "react"
import Layout from "../components/layout"
import { styles, Section, Title } from "../utils"
import styled from "styled-components"
import ContextConsumer from "../components/Context"
import CoachingFormFR from "../components/coachingPage/CoachingForm_PrivateCoaching_FR"
import CoachingFormEN from "../components/coachingPage/CoachingForm_PrivateCoaching_EN"
export default class SubscribeInfo extends Component {
  render() {
    const { location } = this.props
    var coachingTypeRequest = undefined
    if (location.state != null) {
      coachingTypeRequest = location.state.coachingTypeRequest
    }

    return (
      <ContextConsumer>
        {({ isFarsi }) => (
          <Layout>
            <Section style={{ paddingTop: "100px" }}>
              {isFarsi ? (
                <div>
                  <Title
                    title="فرم زیر را پر کنید"
                    message="درخواست کوچینگ و مشاوره با آریانا"
                  />
                  <h3
                    style={{
                      textAlign: "center",
                      color: `${styles.colors.mainGrey}`,
                    }}
                  >
                    پس از تکمیل و ارسال فرم زیر نحوه کار با آریانا و هزینه های
                    مرتبط برای شما فرستاده می شود
                  </h3>
                </div>
              ) : (
                <div>
                  <Title
                    title="fill up the following form"
                    message="To be coached with Ariana"
                  />
                  <h3
                    style={{
                      textAlign: "center",
                      color: `${styles.colors.mainGrey}`,
                    }}
                  >
                    After submitting this form, more inforntion about how Ariana
                    works and associated costs will be sent to you.
                  </h3>
                </div>
              )}

              <CoachingWrapper>
                {/* <h1 className="text">
            Subscribe to stay updated and receive freebies!
          </h1> */}
                {/* <SectionButton style={{ margin: "2rem auto" }}>
            {" "}
            subscrib{" "}
          </SectionButton> */}
                {isFarsi ? (
                  <CoachingFormFR coachingTypeRequest={coachingTypeRequest} />
                ) : (
                  <CoachingFormEN coachingTypeRequest={coachingTypeRequest} />
                )}
              </CoachingWrapper>
            </Section>
          </Layout>
        )}
      </ContextConsumer>
    )
  }
}

const CoachingWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  justify-content: "center";

  /* @media (min-width: 768px) {
    width: 90%;
  }
  @media (min-width: 992px) {
    width: 70%;
  }
  @media (min-width: 1300px) {
    width: 60%;
  }
  @media (min-width: 1700px) {
    width: 50%;
  } */
`
