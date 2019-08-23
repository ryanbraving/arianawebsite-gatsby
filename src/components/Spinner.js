import React, { Component } from "react"
import { css } from "@emotion/core"
// First way to import
// import { ClipLoader } from 'react-spinners';
// Another way to import. This is recommended to reduce bundle size
import ClipLoader from "react-spinners/ClipLoader"

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

export default class Spinner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }
  render() {
    return (
      <div className="sweet-loading">
        <h1> Welcome to Ariana Braving website</h1>
        <h1>Please take a deep breath!</h1>
        <h1>Website is loading ...</h1>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
    )
  }
}
