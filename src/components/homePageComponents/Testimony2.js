import React, { Component } from "react"
import styled from "styled-components"
import { styles, Title, Section, ServiceButton } from "../../utils"
import truncatise from "truncatise"
import { Link } from "gatsby"
import ContextConsumer from "../Context"

export default class Testimony1 extends Component {
  state = {
    count: 0,
    hide: false,
    intervalId: undefined,
    testimonyEN: [
      {
        id: 0,
        name: "Zohre",
        country: "Canada",
        countryCode: "ca",
        text: `Ariana's
        insight has been one of the greatest gifts in my life. I
        used her life coaching services to heal myself emotionally
        and physically. From the first time we talked, I was
        impressed with her credible attitude, her intelligence,
        and her fine ability to be a neutral listener. All my
        sessions have been filled with integrity and pleasurable
        experiences. It was an amazing journey of self discovery
        and challenging destructive thoughts, faith and beliefs
        that most of us have. I am deeply grateful.`,
      },
      {
        id: 1,
        name: "Maryam",
        country: "New Zealand",
        countryCode: "nz",
        text: `Ariana is
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
        there.`,
      },
      {
        id: 2,
        name: "Fatemeh",
        country: "Canada",
        countryCode: "ca",
        text: `It was all
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
        soul...`,
      },
      {
        id: 3,
        name: "Ehsan",
        country: "New Zealand",
        countryCode: "nz",
        text: `Ariana is not
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
        my lovely me.`,
      },
      {
        id: 4,
        name: "",
        country: "New Zealand",
        countryCode: "nz",
        text: "",
      },
      {
        id: 5,
        name: "",
        country: "New Zealand",
        countryCode: "nz",
        text: "",
      },
    ],
    testimonyFR: [
      {
        id: 0,
        name: "زهره",
        country: "کانادا",
        countryCode: "ca",
        text: `بینش و درون بینی آریانا یکی از بزرگترین هدایای زندگی من بود. از خدمات مربیگری مهارتهای زندگی آریانا در درمان احساسی و جسمی خودم کمال ا ستفاده رو بردم. از اولین بار که با آریانا ی عزیز صحبت کردم، با نگرش معتبر، هوشمندی و توانایی او به عنوان یک شنونده بیطرف تحت تاثیر قرار گرفتم. تمام جلسات من با صداقت و تجربه های لذت بخش پر شد. این یک سفر شگفت انگیز از کشف درون بود که افکارو اعتقادات مخرب  رو که بیشتر ما انسان ها داریم، به چالش کشید.`,
      },
      {
        id: 1,
        name: "22222",
        country: "کانادا",
        countryCode: "ca",
        text: `بینش و درون بینی آریانا یکی از بزرگترین هدایای زندگی من بود. از خدمات مربیگری مهارتهای زندگی آریانا در درمان احساسی و جسمی خودم کمال ا ستفاده رو بردم. از اولین بار که با آریانا ی عزیز صحبت کردم، با نگرش معتبر، هوشمندی و توانایی او به عنوان یک شنونده بیطرف تحت تاثیر قرار گرفتم. تمام جلسات من با صداقت و تجربه های لذت بخش پر شد. این یک سفر شگفت انگیز از کشف درون بود که افکارو اعتقادات مخرب  رو که بیشتر ما انسان ها داریم، به چالش کشید.`,
      },
      {
        id: 2,
        name: "33333",
        country: "کانادا",
        countryCode: "ca",
        text: `بینش و درون بینی آریانا یکی از بزرگترین هدایای زندگی من بود. از خدمات مربیگری مهارتهای زندگی آریانا در درمان احساسی و جسمی خودم کمال ا ستفاده رو بردم. از اولین بار که با آریانا ی عزیز صحبت کردم، با نگرش معتبر، هوشمندی و توانایی او به عنوان یک شنونده بیطرف تحت تاثیر قرار گرفتم. تمام جلسات من با صداقت و تجربه های لذت بخش پر شد. این یک سفر شگفت انگیز از کشف درون بود که افکارو اعتقادات مخرب  رو که بیشتر ما انسان ها داریم، به چالش کشید.`,
      },
      {
        id: 3,
        name: "44444",
        country: "کانادا",
        countryCode: "ca",
        text: `بینش و درون بینی آریانا یکی از بزرگترین هدایای زندگی من بود. از خدمات مربیگری مهارتهای زندگی آریانا در درمان احساسی و جسمی خودم کمال ا ستفاده رو بردم. از اولین بار که با آریانا ی عزیز صحبت کردم، با نگرش معتبر، هوشمندی و توانایی او به عنوان یک شنونده بیطرف تحت تاثیر قرار گرفتم. تمام جلسات من با صداقت و تجربه های لذت بخش پر شد. این یک سفر شگفت انگیز از کشف درون بود که افکارو اعتقادات مخرب  رو که بیشتر ما انسان ها داریم، به چالش کشید.`,
      },
      {
        id: 4,
        name: "",
        country: "کانادا",
        countryCode: "ca",
        text: "",
      },
      {
        id: 5,
        name: "",
        country: "کانادا",
        countryCode: "ca",
        text: "",
      },
    ],
  }

  componentDidMount() {
    this.startTimer()
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
          count:
            this.state.count >= 3
              ? 0
              : this.state.count < 0
              ? 3
              : this.state.count + 1,
        })
      }.bind(this),
      1000
    )
  }

  //   onclick(type) {
  //     this.setState({
  //       hide: true,
  //     })
  //     this.timeoutId = setTimeout(
  //       function() {
  //         this.setState({
  //           hide: false,
  //           count:
  //             this.state.count >= 3 && (type === "add" || type === "addAuto")
  //               ? 0
  //               : this.state.count <= 0 && type === "sub"
  //               ? 3
  //               : type === "sub"
  //               ? this.state.count - 1
  //               : this.state.count + 1,
  //         })
  //       }.bind(this),
  //       1000
  //     )
  //     if (type !== "addAuto") {
  //       this.stopTimer()
  //     }
  //   }

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
        {({ isFarsi }) => (
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

            <TestimonyWrapper>
              {/* <div>{this.state.count}</div> */}
              <div className={this.state.hide ? "hide" : "show"}>
                <p className={isFarsi ? "text textFR" : "text"}>
                  {" "}
                  <span style={{ fontSize: "20px" }}>“ </span>
                  {isFarsi
                    ? truncatise(
                        this.state.testimonyFR[this.state.count].text,
                        options
                      )
                    : truncatise(
                        this.state.testimonyEN[this.state.count].text,
                        options
                      )}
                  <span style={{ fontSize: "20px" }}> ”</span>
                </p>
                {/* <h1 style={{ marginTop: "0.5rem", textAlign: "center" }}>
              {this.state.testimonyEN[this.state.count].name}
            </h1> */}
              </div>
              <Link
                to="/testimonyPage"
                style={{ textDecoration: "none" }}
                state={{
                  testimonyEN: this.state.testimonyEN,
                  testimonyFR: this.state.testimonyFR,
                }}
              >
                <ServiceButton
                  style={{ margin: " 3rem auto" }}
                  className={isFarsi ? "btnFR" : ""}
                >
                  {isFarsi ? "بیشتر بخوانید" : "Read More"}
                </ServiceButton>
              </Link>

              {/* <button className="btnBack" onClick={this.onclick.bind(this, "sub")}>
            Back{" "}
          </button>
          <button className="btnNext" onClick={this.onclick.bind(this, "add")}>
            Next{" "}
          </button> */}
            </TestimonyWrapper>
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
