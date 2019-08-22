import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import purple from "@material-ui/core/colors/purple"
import { styles } from "../../utils"
import ContextConsumer from "../Context"
import styled from "styled-components"

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: purple,
    secondary: {
      //   main: "#d2aa5c",
      main: styles.colors.mainYellow,
    },
  },
})

const stylesUI = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  tabRoot: {
    // textTransform: "initial",
    // minWidth: 72,
    // fontWeight: theme.typography.fontWeightRegular,
    // marginRight: theme.spacing.unit * 4,
    fontFamily: ["Vazir"],
    fontWeight: 700,
  },
})

class CenteredTabs extends Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value: value })
  }
  handleChangeFR = (event, value) => {
    value = Math.abs(3 - value)
    this.setState({ value: value })
  }

  render() {
    var { classes, tabNo } = this.props

    return (
      <ContextConsumer>
        {({ isFarsi, setAboutArianaTabNo }) => (
          <TabsWrapper>
            <MuiThemeProvider theme={theme}>
              <Paper className={classes.root}>
                {isFarsi ? (
                  <Tabs
                    value={3 - this.state.value}
                    onChange={this.handleChangeFR}
                    // variant="scrollable"
                    variant="fullWidth"
                    // scrollButtons="on"
                    indicatorColor="secondary"
                    textColor="secondary"
                    centered
                    // textColor= ${styles.colors.mainGrey}
                  >
                    <Tab
                      classes={{ root: classes.tabRoot }}
                      label="جملات الهام بخش"
                      // label="درباره آریانا"
                      onClick={() => {
                        tabNo(3)
                      }}
                    />
                    <Tab
                      classes={{ root: classes.tabRoot }}
                      label="پادکست"
                      // label="درباره آریانا"
                      onClick={() => {
                        tabNo(2)
                      }}
                    />
                    <Tab
                      classes={{ root: classes.tabRoot }}
                      label="ویدیوکست"
                      onClick={() => {
                        tabNo(1)
                      }}
                    />
                    <Tab
                      classes={{ root: classes.tabRoot }}
                      // label="درباره آریانا"
                      label="وبلاگ"
                      onClick={() => {
                        tabNo(0)
                      }}
                    />
                  </Tabs>
                ) : (
                  <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    textColor="secondary"
                    // textColor= ${styles.colors.mainGrey}
                    centered
                  >
                    <Tab
                      classes={{ root: classes.tabRoot }}
                      label="I am Ariana"
                      onClick={() => {
                        tabNo(0)
                      }}
                    />
                    <Tab
                      classes={{ root: classes.tabRoot }}
                      label="Ariana's Education"
                      onClick={() => {
                        tabNo(1)
                      }}
                    />
                    <Tab
                      classes={{ root: classes.tabRoot }}
                      label="Testimonials"
                      onClick={() => {
                        tabNo(2)
                      }}
                    />
                  </Tabs>
                )}
              </Paper>
            </MuiThemeProvider>
          </TabsWrapper>
        )}
      </ContextConsumer>
    )
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(stylesUI)(CenteredTabs)

const TabsWrapper = styled.div`
  .countryFR {
    direction: rtl;
    color: red;
    font-size: 5rem;
    /* font-family: "Vazir"; */
    /* text-align: left; */
  }
`
