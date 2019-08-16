import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import styled from "styled-components"
import QueryCasts from "./QueryCasts"

const stylesTheme = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})
class ResourceTab_Videocast_FR extends Component {
  render() {
    return (
      <ResourceWrapper>
        <QueryCasts type={"inspiration"} />
      </ResourceWrapper>
    )
  }
}

export default withStyles(stylesTheme)(ResourceTab_Videocast_FR)

const ResourceWrapper = styled.div``
