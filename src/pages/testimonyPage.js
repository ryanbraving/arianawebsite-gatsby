import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import styled from "styled-components"
import classnames from "classnames"
import { green } from "@material-ui/core/colors"
import ContextConsumer from "../components/Context"
import ReactCountryFlag from "react-country-flag"

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

function testimonyPage(props) {
  const { classes, location } = props
  if (location.state == undefined) {
    location.state = {}
    location.state.testimonyFR = [
      { id: 0, name: "", country: "", countryCode: "", text: "" },
    ]
    location.state.testimonyEN = [
      { id: 0, name: "", country: "", countryCode: "", text: "" },
    ]
  }
  return (
    <ContextConsumer>
      {({ isFarsi }) => (
        <Layout>
          <TestimonyPageWrapper>
            {isFarsi
              ? location.state.testimonyFR.map(item => {
                  return (
                    <Paper
                      key={item.id}
                      className={classnames(classes.root, "paper")}
                      elevation={20}
                    >
                      <Typography
                        component="p"
                        className={classnames("text", "textFR")}
                      >
                        {item.text}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="h3"
                        className={classnames("name", "nameFR")}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        component="h3"
                        className={classnames("country", "countryFR")}
                      >
                        <ReactCountryFlag
                          styleProps={{
                            width: "30px",
                            height: "20px",
                          }}
                          code={item.countryCode}
                          svg
                        />
                        &nbsp;
                        {item.country}
                      </Typography>
                    </Paper>
                  )
                })
              : location.state.testimonyEN.map(item => {
                  return (
                    <Paper
                      key={item.id}
                      className={classnames(classes.root, "paper")}
                      elevation={20}
                    >
                      <Typography component="p" className="text">
                        {item.text}
                      </Typography>
                      <Typography variant="h5" component="h3" className="name">
                        {item.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        component="h3"
                        className="country"
                      >
                        <ReactCountryFlag
                          styleProps={{
                            width: "30px",
                            height: "20px",
                          }}
                          code={item.countryCode}
                          svg
                        />
                        &nbsp;
                        {item.country}
                      </Typography>
                    </Paper>
                  )
                })}
          </TestimonyPageWrapper>
        </Layout>
      )}
    </ContextConsumer>
  )
}

testimonyPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(testimonyPage)

const TestimonyPageWrapper = styled.div`
  padding-top: 100px;
  margin: auto;
  .paper {
    margin: 2rem auto;
    /* width: 800px; */
  }
  .text {
    line-height: 1.7rem;
    font-size: 1rem;
    /* font-weight: bold; */
    text-align: justify;
  }
  .textFR {
    font-size: 1rem;
    direction: rtl;
    font-family: "Vazir";
  }
  .name {
    margin-top: 1rem;
    /* font-size: 1.5rem; */
    /* text-align: center; */
  }
  .nameFR {
    direction: rtl;
    font-family: "Vazir";
  }
  .country {
    margin-top: 0.3rem;
    /* font-size: 1.2rem; */
    text-align: right;
  }
  .countryFR {
    direction: rtl;
    font-family: "Vazir";
    text-align: left;
  }
  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 992px) {
    width: 70%;
  }
  @media (min-width: 1292px) {
    width: 60%;
  }
  @media (min-width: 1492px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`
