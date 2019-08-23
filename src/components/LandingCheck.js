import React, { Component } from "react"
import ContextConsumer from "./Context"
import styled from "styled-components"
import Spinner from "./Spinner"

export default class LandingCheck extends Component {
  state = {
    clientInfo: null,
  }
  myRef = React.createRef()

  componentDidMount() {
    const url2 = "https://ipinfo.io/json"
    const url1 = "https://api.ipdata.co/?api-key=test"

    fetch(url1)
      .then(response => response.json())
      .then(data => {
        if (!data.ip) {
          fetch(url2)
            .then(response => response.json())
            .then(data => {
              data.provider = "url2: ipinfo"
              data.country_name = data.country
              this.setState({ clientInfo: data })
            })
        } else {
          data.provider = "url1: ipdata"
          this.setState({ clientInfo: data })
        }
        this.myRef.current.click()
      })
  }
  render() {
    if (this.state.clientInfo) {
      var { country_name } = this.state.clientInfo
    } else {
      country_name = "Iran"
    }
    return (
      <ContextConsumer>
        {({ landingDone, handleLanding, setFarsi, setEnglish }) => (
          <SpinnerWrapper
            ref={this.myRef}
            onClick={() => {
              console.log("checking landing ....")

              if (!landingDone) {
                country_name === "Iran" || country_name === "IR"
                  ? setFarsi()
                  : setEnglish()
                console.log("landing just Done")
                handleLanding()
              } else {
                console.log("landing already done")
              }
            }}
          >
            {landingDone ? country_name : <Spinner/>}
          </SpinnerWrapper>
        )}
      </ContextConsumer>
    )
  }
}

const SpinnerWrapper = styled.div`
  display: block;
  margin: 10rem auto;
  /* background-color: red; */
  text-align: center;
  
`
