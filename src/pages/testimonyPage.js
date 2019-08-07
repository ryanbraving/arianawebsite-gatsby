import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import styled from "styled-components"
import classnames from "classnames"
import ContextConsumer from "../components/Context"
import ReactCountryFlag from "react-country-flag"
import { graphql } from "gatsby"

export const GET_Data = graphql`
  query {
    getImage2: file(relativePath: { eq: "bcg/testimony.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    getEnTestimonial: allContentfulTestimonialEn {
      totalCount
      edges {
        node {
          id
          name
          country
          countryCode
          text {
            text
          }
        }
      }
    }
    getFrTestimonial: allContentfulTestimonialFr {
      totalCount
      edges {
        node {
          id
          name
          country
          countryCode
          text {
            text
          }
        }
      }
    }
  }
`

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

function testimonyPage(props) {
  const { classes, data } = props
  const image = data.getImage2.childImageSharp.fluid
  const testimonyFR = data.getFrTestimonial.edges
  const testimonyEN = data.getEnTestimonial.edges
  return (
    <ContextConsumer>
      {({ isFarsi }) => (
        <Layout>
          <TestimonyPageWrapper img={image}>
            {isFarsi
              ? testimonyFR.map(({ node }) => {
                  return (
                    <Paper
                      key={node.id}
                      className={classnames(classes.root, "paper")}
                      elevation={20}
                    >
                      <Typography
                        component="p"
                        className={classnames("text", "textFR")}
                      >
                        {node.text.text}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="h3"
                        className={classnames("name", "nameFR")}
                      >
                        {node.name}
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
                          code={node.countryCode}
                          svg
                        />
                        &nbsp;
                        {node.country}
                      </Typography>
                    </Paper>
                  )
                })
              : testimonyEN.map(({ node }) => {
                  return (
                    <Paper
                      key={node.id}
                      className={classnames(classes.root, "paper")}
                      elevation={20}
                    >
                      <Typography component="p" className="text">
                        {node.text.text}
                      </Typography>
                      <Typography variant="h5" component="h3" className="name">
                        {node.name}
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
                          code={node.countryCode}
                          svg
                        />
                        &nbsp;
                        {node.country}
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
  /* background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.05) 55%,
      rgba(0, 0, 0, 0.5) 75%
    ),
    url(${props => props.img.src}); */
  background: url(${props => props.img.src});
  min-height: calc(100vh);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #464646;
  /* position: relative; */
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
    .paper{
      width: 80%;
    }
  }
  @media (min-width: 992px) {
    .paper{
      width: 70%;
    }
  }
  @media (min-width: 1292px) {
    .paper{
      width: 60%;
    }
  }
  @media (min-width: 1492px) {
    .paper{
      width: 50%;
    }
  }
  @media (max-width: 768px) {
    .paper{
      width: 90%;
    }
  }
`
