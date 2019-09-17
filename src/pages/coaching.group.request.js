import React, { Component } from "react"
import Layout from "../components/layout"
import { styles, Section, Title } from "../utils"
import styled from "styled-components"
import ContextConsumer from "../components/Context"
import GroupCoachingFormFR from "../components/servicePage/CoachingForm_GroupCoaching_FR"
import GroupCoachingFormEN from "../components/servicePage/CoachingForm_GroupCoaching_EN"
import LandingCheck from "../components/LandingCheck"

export default class SubscribeInfo extends Component {
  render() {
    const { location } = this.props
    var coachingTypeRequest = undefined
    if (location.state != null) {
      coachingTypeRequest = location.state.coachingTypeRequest
    }

    return (
      <ContextConsumer>
        {({ landingDone, isFarsi }) => (
          <React.Fragment>
            {landingDone ? (
              <Layout>
                <Section style={{ paddingTop: "100px" }}>
                  {isFarsi ? (
                    <div>
                      <Title
                        title="فرم زیر را پر کنید"
                        message="درخواست کوچینگ و مشاوره گروهی"
                      />
                      <h3
                        style={{
                          textAlign: "center",
                          color: `${styles.colors.mainGrey}`,
                          direction: "rtl",
                        }}
                      >
                        پس از تکمیل و ارسال فرم زیر نحوه کار با آریانا و هزینه
                        های مرتبط برای شما فرستاده می شود. اما شروع هر دوره
                        کوچینگ زمانی است که تعداد ثبت نامها به حد نصاب برسد.
                      </h3>
                    </div>
                  ) : (
                    <div>
                      <Title
                        title="fill up the following form"
                        message="For group coaching with Ariana"
                      />
                      <h3
                        style={{
                          textAlign: "center",
                          color: `${styles.colors.mainGrey}`,
                        }}
                      >
                        After submitting this form, you will be notified of the
                        next step and the associated costs.
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
                      <GroupCoachingFormFR
                        coachingTypeRequest={coachingTypeRequest}
                      />
                    ) : (
                      <GroupCoachingFormEN
                        coachingTypeRequest={coachingTypeRequest}
                      />
                    )}
                  </CoachingWrapper>
                </Section>
              </Layout>
            ) : (
              <LandingCheck />
            )}
          </React.Fragment>
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
