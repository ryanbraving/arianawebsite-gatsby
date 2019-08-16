import React, { Component } from 'react'
import ContextConsumer from "../components/Context"
import ResourcesFR from "../components/resourcePage/resourcesFR"
import ResourcesEN from "../components/resourcePage/resourcesEN"
import Layout from "../components/layout"


export default class Resources extends Component {
  render() {
    return (
        <ContextConsumer>
            {({ isFarsi }) => (
            <Layout>
                {isFarsi ? <ResourcesFR/> : <ResourcesEN/>}
            </Layout>
            )}
        </ContextConsumer>
    )
  }
}