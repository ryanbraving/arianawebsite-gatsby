import React, { Component } from "react"
// import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import styled from "styled-components"
import QueryArticles from "../blogPageComponents/QueryArticles"

const stylesTheme = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})
class ResourceTab_Weblog_FR extends Component {
  render() {
    const { classes } = this.props
    return (
      <ResourceWrapper>
        <QueryArticles />
      </ResourceWrapper>
    )
  }
}

// Coaching_Tab_Private_FR.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default withStyles(stylesTheme)(ResourceTab_Weblog_FR)

const ResourceWrapper = styled.div``
