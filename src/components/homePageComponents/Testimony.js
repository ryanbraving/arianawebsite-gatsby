import React, { Component } from "react"
import styled from "styled-components"
import { styles, Title, Section, ServiceButton } from "../../utils"
import truncatise from "truncatise"
import { Link, graphql, StaticQuery } from "gatsby"
import ContextConsumer from "../Context"

const GET_Testimonials = graphql`
  query {
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

export default class Testimony1 extends Component {
  state = {
    countEN: 0,
    totalCountEN: 0,
    countFR: 0,
    totalCountFR: 0,
    hide: false,
    intervalId: undefined,
  }

  componentDidMount() {
    this.startTimer()
    // this.setState({ testimonyEN: this.props.data.getEnTestimonial })
  }

  startTimer() {
    var intervalId = setInterval(this.onclick.bind(this), 5000)
    // store intervalId in the state so it can be accessed later:
    this.setState({ intervalId: intervalId })
  }

  stopTimer() {
    clearInterval(this.state.intervalId)
  }

  onclick() {
    this.setState({
      hide: true,
    })
    this.timeoutId = setTimeout(
      function() {
        this.setState({
          hide: false,
          countEN:
            this.state.countEN >= this.state.totalCountEN - 1
              ? 0
              : this.state.countEN < 0
              ? this.state.totalCountEN - 1
              : this.state.countEN + 1,
          countFR:
            this.state.countFR >= this.state.totalCountFR - 1
              ? 0
              : this.state.countFR < 0
              ? this.state.totalCountFR - 1
              : this.state.countFR + 1,
        })
      }.bind(this),
      1000
    )
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    clearInterval(this.state.intervalId)
  }


  render() {
    var options = {
      TruncateBy: "words", // Options are 'words', 'characters' or 'paragraphs'
      TruncateLength: 90, // The count to be used with TruncatedBy
      StripHTML: false, // Whether or not the truncated text should contain HTML tags
      Strict: true, // If set to false the truncated text finish at the end of the word
      Suffix: " ...", // Text to be appended to the end of the truncated text
    }
    
    return (
      <ContextConsumer>
        {({ isFarsi, setAboutArianaTabNo }) => (
          <Section>
            {isFarsi ? (
              <Title
                title="سخن دیگران"
                message={"تجربه دیگران از کار با من چیست؟"}
              />
            ) : (
              <Title
                title="Testimonial"
                message={"What Others Say About Ariana?"}
              />
            )}

            <StaticQuery
              query={GET_Testimonials}
              render={data => {
                // this.setState({
                //   totalCountEN: data.getEnTestimonial.totalCount,
                //   totalCountFR: data.getFrTestimonial.totalCount,
                // })
                // this.state.totalCountEN = data.getEnTestimonial.totalCount
                // this.state.totalCountFR = data.getFrTestimonial.totalCount
                if (
                  this.state.totalCountEN !==
                  parseInt(data.getEnTestimonial.totalCount)
                 || 
                  this.state.totalCountFR !==
                  parseInt(data.getFrTestimonial.totalCount)
                ) {
                  this.setState({
                    totalCountEN: data.getEnTestimonial.totalCount,
                    totalCountFR: data.getFrTestimonial.totalCount,
                    // totalCountFR: data.getFrTestimonial.totalCount,
                  })
                }
                // this.handleCounts(data)

                // onClick={this.setState({inProgress: true})}
                // onClick={() => this.setState({inProgress: true})}

                return (
                  
                  // ) {
                  //   this.setState({
                  //     totalCountEN_new: data.getEnTestimonial.totalCount,
                  //     // totalCountFR: data.getFrTestimonial.totalCount,
                  //   })
                  
                  <TestimonyWrapper>
                    <div className={this.state.hide ? "hide" : "show"}>
                      <p className={isFarsi ? "text textFR" : "text"}>
                        {" "}
                        <span style={{ fontSize: "20px" }}>“ </span>
                        {isFarsi
                          ? truncatise(
                              data.getFrTestimonial.edges[this.state.countFR]
                                .node.text.text,
                              options
                            )
                          : truncatise(
                              data.getEnTestimonial.edges[this.state.countEN]
                                .node.text.text,
                              options
                            )}
                        <span style={{ fontSize: "20px" }}> ”</span>
                      </p>

                      {isFarsi ? (
                      <Link
                        to="/services"
                        style={{ textDecoration: "none" }}
                        state={{
                          link_tabNo: 4,
                        }}
                      >
                          <ServiceButton
                            style={{ margin: " 3rem auto" }}
                            className={isFarsi ? "btnFR" : ""}
                          >
                            {isFarsi ? "بیشتر بخوانید" : "Read More"}
                          </ServiceButton>
                        </Link>
                      ) : (
                        <Link
                              to="/services"
                              style={{ textDecoration: "none" }}
                              state={{
                                link_tabNo: 4,
                              }}
                            >
                          <ServiceButton
                            style={{ margin: " 3rem auto" }}
                            className={isFarsi ? "btnFR" : ""}
                          >
                            {isFarsi ? "بیشتر بخوانید" : "Read More"}
                          </ServiceButton>
                        </Link>
                      )}
                    </div>
                  </TestimonyWrapper>
                )
              }}
            />
          </Section>
        )}
      </ContextConsumer>
    )
  }
}

const TestimonyWrapper = styled.div`
  /* height: 550px; */
  /* margin: 0 10rem; */
  margin: auto;
  padding: 0rem;
  .show {
    -webkit-transition: 1s;
    -moz-transition: 1s;
    -o-transition: 1s;
    transition: 1s;
    opacity: 1;
    visibility: visible;
  }
  .hide {
    -webkit-transition: 1s;
    -moz-transition: 1s;
    -o-transition: 1s;
    transition: 1s;
    opacity: 0;
    visibility: hidden;
  }
  .text {
    margin: 1rem auto;
    color: ${styles.colors.mainGrey};
    font-style: italic;
    font-size: 1.2rem;
    /* letter-spacing: 0rem; */
    text-align: justify;
    line-height: 2.7rem;
    /* word-spacing: 0.2rem; */
  }
  .textFR {
    direction: rtl;
  }

  .btnFR {
    font-family: Vazir;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
