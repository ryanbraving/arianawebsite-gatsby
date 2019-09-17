import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import purple from "@material-ui/core/colors/purple"
import { styles } from "../../utils"
import ContextConsumer from "../../components/Context"
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

// export default class about-Tabs extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

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
  // componentDidMount() {
  // if (this.props.tabNo != undefined) {
  //   this.setState({ value: this.props.tabNo })
  // }
  // if (this.props.tabNo == 2) {
  //   this.setState({ value: 2 })
  // }
  // }
  render() {
    var { classes, tabNo, link_tabNo } = this.props
    if (link_tabNo != null) {
      // this.setState({value: link_tabNo })
      this.state.value = link_tabNo
    }
    return (
      <ContextConsumer>
        {({ isFarsi }) => (
          <TabsWrapper>
            <MuiThemeProvider theme={theme}>
              <Paper className={classes.root}>
                {isFarsi ? (
                  <Tabs
                    value={3 - this.state.value}
                    onChange={this.handleChangeFR}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="fullWidth"
                    // variant="scrollable"
                    // variant="fullWidth"
                    // scrollButtons="off"
                    // textColor= ${styles.colors.mainGrey}
                    // centered
                  >
                    <Tab
                      classes={{ root: classes.tabRoot }}
                      label="تجربه دیگران"
                      // label="درباره آریانا"
                      onClick={() => {
                        tabNo(3)
                      }}
                    />
                    <Tab
                      classes={{ root: classes.tabRoot }}
                      label="سوالات متداول"
                      onClick={() => {
                        tabNo(2)
                      }}
                    />
                    {/* <Tab
                      classes={{ root: classes.tabRoot }}
                      label="دوره‌های آنلاین"
                      // label="سخن دیگران"
                      onClick={() => {
                        tabNo(2)
                      }}
                    /> */}
                    <Tab
                      classes={{ root: classes.tabRoot }}
                      label="کوچینگ گروهی"
                      // label="سخن دیگران"
                      onClick={() => {
                        tabNo(1)
                      }}
                    />
                    <Tab
                      classes={{ root: classes.tabRoot }}
                      label="کوچینگ خصوصی"
                      // label="درباره آریانا"
                      onClick={() => {
                        tabNo(0)
                      }}
                    />
                  </Tabs>
                ) : (
                  <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="fullWidth"
                    // textColor= ${styles.colors.mainGrey}
                    // centered
                  >
                    <Tab
                      classes={{ root: classes.tabRoot }}
                      label="Private Coaching"
                      onClick={() => {
                        tabNo(0)
                      }}
                    />
                    <Tab
                      classes={{ root: classes.tabRoot }}
                      label="Group Coaching"
                      onClick={() => {
                        tabNo(1)
                      }}
                    />
                    {/* <Tab
                      classes={{ root: classes.tabRoot }}
                      label="Online Courses"
                      onClick={() => {
                        tabNo(2)
                      }}
                    /> */}
                    <Tab
                      classes={{ root: classes.tabRoot }}
                      label="Q & A"
                      onClick={() => {
                        tabNo(2)
                      }}
                    />
                    <Tab
                      classes={{ root: classes.tabRoot }}
                      label="Clients' Experiences"
                      onClick={() => {
                        tabNo(3)
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
