import React, { Component } from "react"
import ContextConsumer from "../components/Context"
import ResourcesFR from "../components/resourcePage/resourcesFR"
import ResourcesEN from "../components/resourcePage/resourcesEN"
import Layout from "../components/layout"
import LandingCheck from "../components/LandingCheck"

export default class Resources extends Component {
  render() {
    return (
      <ContextConsumer>
        {({ landingDone, isFarsi }) => (
          <React.Fragment>
            {landingDone ? (
              <Layout>{isFarsi ? <ResourcesFR /> : <ResourcesEN />}</Layout>
            ) : (
              <LandingCheck />
            )}
          </React.Fragment>
        )}
      </ContextConsumer>
    )
  }
}
