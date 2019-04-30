import React, { Component } from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { Section, Title, styles } from "../../utils"
import styled from "styled-components"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default class Testimony extends Component {
  render() {
    return (
      <Section>
        <Title title="Testimonial" message={"What Others Say About Ariana?"} />
        <TestimonyWrapper>
          <CarouselProvider
            className={"carouselProvider"}
            naturalSlideWidth={50}
            naturalSlideHeight={24}
            totalSlides={4}
            // interval={50000}
            // isPlaying={true}
            playDirection={"forward"}
            visibleSlides={1}
            lockOnWindowScroll={true}
          >
            <div className="mainDiv">
              <Slider className="slider">
                <Slide index={0} className={"slide"}>
                  <div
                    // calssName="testimony"
                    style={{ margin: "2rem" }}
                  >
                    <p style={{ fontStyle: "italic" }}>
                      {" "}
                      <span style={{ fontSize: "20px" }}>“ </span>Ariana's
                      insight has been one of the greatest gifts in my life. I
                      used her life coaching services to heal myself emotionally
                      and physically. From the first time we talked, I was
                      impressed with her credible attitude, her intelligence,
                      and her fine ability to be a neutral listener. All my
                      sessions have been filled with integrity and pleasurable
                      experiences. It was an amazing journey of self discovery
                      and challenging destructive thoughts, faith and beliefs
                      that most of us have. I am deeply grateful.
                      <span style={{ fontSize: "20px" }}> ”</span>
                    </p>
                    <h1 style={{ marginTop: "0.5rem", textAlign: "center" }}>
                      Zohre
                    </h1>
                  </div>
                </Slide>
                <Slide index={0} className={"slide"}>
                  <div
                    // calssName="testimony"
                    style={{ margin: "2rem" }}
                  >
                    <p style={{ fontStyle: "italic" }}>
                      {" "}
                      <span style={{ fontSize: "20px" }}>“ </span>Ariana is
                      generous with her extensive knowledge and has a deep and
                      sincere integrity. She led me to look at my life
                      holistically first, and then focus down on the areas that
                      I really wanted to improve. She is a wonderful listener
                      and helped me to organise my thoughts by the very deep and
                      bright questions that she brought to our sessions. She
                      helped me to re-evaluate what was important to me and
                      identify somethings that were blocking me from where I
                      want to go in life. In short, if you have a voice inside
                      whispering that you could do more, be more and a better
                      version of yourself, or just that you need to make a
                      change in your way of thinking, Ariana is a supportive,
                      honest and skilled life coach who can help you to get in
                      there.
                      <span style={{ fontSize: "20px" }}> ”</span>
                    </p>
                    <h1 style={{ marginTop: "0.5rem", textAlign: "center" }}>
                      Maryam
                    </h1>
                  </div>
                </Slide>
                <Slide index={0} className={"slide"}>
                  <div style={{ margin: "2rem" }}>
                    <p style={{ fontStyle: "italic" }}>
                      {" "}
                      <span style={{ fontSize: "20px" }}>“ </span>It was all
                      dark, and I was lost... Nothing had enlightened my life. I
                      had gone through therapy for about two years and not even
                      a single ray of light in me... I was working so hard to
                      drag myself out of bed every morning to go to the job I
                      didn't like, and completely forgot about how precious my
                      body and mental health were, or at least I can say that I
                      did not care! ...That wasn't life at all, was just not
                      being dead physically... Then I heard about Aria from a
                      friend, and don't know why, but I thought: "I'll try this
                      one too!!" Best part was that it was a whole new process
                      of self-healing. A completely different approach! And she
                      patiently walked with me hand in hand and helped me see
                      the path through the mist. She taught me to be the "good
                      mother" for myself first and pay more attention to my
                      body's signals. taught me to bless every day and decide to
                      get the most of that, taught me to dream again... and more
                      importantly, decide to live my dreams... Well, we all know
                      life is not perfect. It has its ups and downs, and it's so
                      easy to lose track of yourself and drown in day-to-day
                      living, and my life is not an exception... But now I know
                      how to keep dreaming and help myself back to the path of
                      living my dreams and FEEL my life with my body and my
                      soul...
                      <span style={{ fontSize: "20px" }}> ”</span>
                    </p>
                    <h1 style={{ marginTop: "0.5rem", textAlign: "center" }}>
                      Fatemeh
                    </h1>
                  </div>
                </Slide>
                <Slide index={0} className={"slide"}>
                  <div style={{ margin: "2rem" }}>
                    <p style={{ fontStyle: "italic" }}>
                      {" "}
                      <span style={{ fontSize: "20px" }}>“ </span>Ariana is not
                      only a great coach but also a kind friend who opened a
                      peaceful space for me to find real me and love myself when
                      I really missed my little kid inside me. She helped to see
                      how I was sabotaging my dreams, how was growing up my
                      fears as a reality, how was ignoring my real feelings
                      inside me, how was following wrong believes from my
                      childhood and culture which could hurt me and more
                      important is that she helped to stop them, see my soul
                      naked and accept what I am, also love love and love myself
                      more, as I always deserved. It is not too long I am using
                      her advices however huge changes happening in my life in
                      this short term (about 4 month). Now I am Happier and
                      calmer and more in peace. What could make me angry and
                      ruin my day easily couple of months ago now is a joke and
                      I can see myself when facing with situation which is not
                      resonate with my soul and my dreams. Now I see my beliefs
                      and choose any of them which is help and let fears go and
                      peace come in. Thank you, Ariana, for supporting me and
                      being so patient with me also for your great helps to find
                      my lovely me.
                      <span style={{ fontSize: "20px" }}> ”</span>{" "}
                    </p>
                    <h1 style={{ marginTop: "0.5rem", textAlign: "center" }}>
                      Ehsan
                    </h1>
                  </div>
                </Slide>
              </Slider>

              {/* <ButtonBack className="btnBack">
                <FaChevronLeft />
              </ButtonBack>
              <ButtonNext className="btnNext">
                <FaChevronRight />
              </ButtonNext> */}
              <ButtonBack className="btnBack1">Back</ButtonBack>
              <ButtonNext className="btnNext1">Next</ButtonNext>
            </div>
          </CarouselProvider>
        </TestimonyWrapper>
      </Section>
    )
  }
}

const TestimonyWrapper = styled.div`
  /* width: 50%; */
  /* background: green; */
  /* margin: auto 0; */
  .slider {
    /* height:500px; */
    /* text-align: center; */
    /* color: blue; */
    /* margin: 0 auto; */
  }
  .slide {
    height: 330px;
    /* background: ${styles.colors.mainYellow}; */
    color: black;
    /* margin-top: 2rem; */
  }
  .carouselProvider {
    /* height: 300px; */
    /* background-color: ${styles.colors.mainYellow}; */
    /* margin: auto 0;  */
  }
  .mainDiv {
    position: relative;
  }
  .btnNext {
    background: transparent;
    color: ${styles.colors.mainWhite};
    border: none;
    padding: 0.5rem 0.5rem 0rem 0.5rem;
    position: absolute;
    top: 65%;
    left: 75%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
  }
  .btnBack {
    background: transparent;
    color: ${styles.colors.mainWhite};
    border: none;
    position: absolute;
    top: 65%;
    left: 25%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
  }
`
