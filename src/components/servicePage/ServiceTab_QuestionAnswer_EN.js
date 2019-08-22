import React, { Component } from "react"
// import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import classnames from "classnames"
import { styles, ServiceButton } from "../../utils"
import { Link } from "gatsby"
import styled from "styled-components"

const stylesTheme = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
})
class CoachingTab_QnA_FR extends Component {
  render() {
    const { classes } = this.props
    return (
      <CoachingWrapper>
        <Paper className={classnames(classes.root, "paper")} elevation={20}>
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro")}
          >
            Frequently asked questions (FAQ)
          </Typography>
          <Typography component="h3" className={classnames("text")}>
            These are questions which are repeatedly being asked from Ariana.
            Some questions have changed a little bit so that a more
            comprehensive answer can be provided.
            <br />
          </Typography>
          <Typography component="h3" className={classnames("text")}>
            <br />
            <ul style={{ paddingRight: "1rem" }}>
              <li className="questions">
                <b>What the heck is life coaching about? </b>
              </li>
              <li style={{ listStyleType: "none" }}>
                All we want in our lives is to be happy and fulfilled. But
                living on the planet Earth happens to be a difficult task!
                Especially at this time of social, economic and political chaos,
                when there are rapid changes happening all around us and there
                is nothing that is guaranteed. We have no control over anything
                except our own thoughts, beliefs, choices, and actions which
                happens to be the scope of Ariana’s work. As your coach and
                empathic witness, Ariana will help you to see your truth and to
                find the still point within yourself which is constantly showing
                you the direction to fulfill your destiny, like a compass.
                During the coaching process, she will teach you practical tools
                and equip you with the self-awareness you need to make the best
                decisions for yourself in any given circumstance. In a nutshell
                she will coach you toward a way of living which is in alignment
                with your deepest inner longings so you can access your own fire
                to create the life you long for. This is a liberating and
                redeeming process which is all encompassing: from am I with the
                right person, to what is my best career move, to what should I
                eat for lunch, or even whether or not I should go to that party!
                This process may very well turn your whole life upside down in a
                wild way, for good. Just remember it won’t be easy, but I
                guarantee it would be liberating. If this makes sense to you,
                Ariana would love to have the honour of serving you in whatever
                is going on in your life right now. Let’s do the work!
              </li>

              <br />
              <li className="questions">
                <b>In what scenarios coaching with Ariana can be helpful?</b>
              </li>
              <li style={{ listStyleType: "none" }}>
                These are some examples:
                <ul
                  style={{
                    paddingRight: "1rem",
                    listStyleType: "square",
                    fontSize: "0.85rem",
                  }}
                >
                  <li>
                    If you’ve lost touch with what’s important to you and need a
                    place to start.
                  </li>
                  <li>
                    If you know what you want in your life and have a clear
                    vision but feel stuck and unable to reach your goals.
                  </li>
                  <li>
                    If you are not clinically depressed but have mild depression
                    and an inner sense of melancholy, regardless of your life’s
                    external circumstances.
                  </li>
                  <li>
                    If you don't know what to do in a major life decision.
                  </li>
                  <li>
                    If you feel you are unable to optimally manage your time and
                    suffering from low performance.
                  </li>
                  <li>
                    If you have problems accepting yourself or if you are
                    suffering from low self-esteem and self-confidence.
                  </li>
                  <li>
                    If you are craving a better life and know you have a high
                    potential but find yourself hopeless in moving forward and
                    this has become a source of suffering.
                  </li>
                  <li>
                    If you have a lot of stress, or if you don’t know how to
                    manage yourself and stay calm in times of trouble.
                  </li>
                  <li>
                    If something (for example your relationships) is draining
                    your energy, but you feel stuck and don’t know what to do
                    about it.
                  </li>
                  <li>
                    If you are not happy with your career but don’t know what to
                    do about it and are feeling stuck.
                  </li>
                  <li>
                    If you aren't as healthy as you'd like to be, or if you feel
                    deflated and tired most of the time.
                  </li>
                  <li>
                    If your extra body weight is a source of anxiety, but even
                    though you are trying different diets, you are unable to
                    lose the damn weight.
                  </li>
                  <li>
                    If you have been diagnosed with a terminal illness and have
                    lost yourself to panic and anxiety.
                  </li>
                </ul>
              </li>
              <br />
              <li className="questions">
                <b>What is Ariana’s coaching method?</b>
              </li>
              <li style={{ listStyleType: "none" }}>
                Ariana is a creative and intuitive coach. The unique and
                transformative coaching methodology that she uses is an
                innovative blend of spirituality and science. She also brings
                her life experiences and wisdom to the overall approach of
                coaching. If you think coaching might be for you, don’t hesitate
                to contact her as she can set up an initial assessment to make
                sure she can be of help.
              </li>
              <br />
              <li className="questions">
                <b>
                  Why Ariana is one of the best coaches to help me get unstuck?
                </b>
              </li>
              <li style={{ listStyleType: "none" }}>
                She will not dictate a prescription or a to-do for you (she
                doesn’t believe in that approach). She will lead you to explore
                why some thoughts/relationships/activities/foods make you feel
                worse than others and how to strategically use your biofeedback
                to effectively navigate your life toward joy, peace, and inner
                sense of fulfillment. Her aim is to equip you with the tools,
                insight and self-awareness to make the best decisions for
                yourself in any given circumstance.
                <b style={{ color: "red" }}>
                  <br /> Here you can read what others said about their
                  experience of working with Ariana.
                </b>{" "}
                <Link
                  to="/services"
                  style={{ textDecoration: "none" }}
                  state={{
                    link_tabNo: 4,
                  }}
                >
                  <ServiceButton style={{ margin: " 0.5rem auto" }}>
                    Clients' Experiences
                  </ServiceButton>
                </Link>
              </li>

              <br />
              <li className="questions">
                <b>
                  Does Ariana have any qualification in the field of coaching?
                </b>
              </li>
              <li style={{ listStyleType: "none" }}>
                Yes. You can read about Ariana’s qualifications and trainings
                here:
                <Link
                  to="/about"
                  style={{ textDecoration: "none" }}
                  state={{
                    link_tabNo: 1,
                  }}
                >
                  <ServiceButton
                    style={{
                      margin: "2rem auto 1rem auto",
                    }}
                  >
                    Ariana's Education
                  </ServiceButton>
                </Link>
              </li>

              <br />
              <li className="questions">
                <b>What is the difference between life coaching & therapy? </b>
              </li>

              <li style={{ listStyleType: "none" }}>
                While therapists and psychologists help unwell people become
                mentally healthy, Ariana as a life coach works with people who
                are mentally healthy. Ariana helps them achieve their full
                potential and discover their ideal lives. This could include
                getting unstuck on a certain issue, becoming your best, happiest
                and most fulfilled self, or improving your relationships,
                career, or business. While a life coach may ask you questions
                about your past or your family history to get a better
                understanding of what is important to you, they are more focused
                on the present and future, helping you gain greater fulfillment
                in your current life.
                <br />
                Coaching services are not in any way to be construed as a
                replacement for psychotherapy or any other mental healthcare,
                legal counsel, or medical advice. If Ariana believes it is in
                your best interest to seek the assistance of other specialists,
                she will advise you on it.
              </li>

              <br />
              <li className="questions">
                <b>What is the difference between coaching and consulting?</b>
              </li>

              <li style={{ listStyleType: "none" }}>
              A life coach is a guide who partners with you to help you access your own inner guidance. Instead of telling you or advising you as to what you should do. A coach will ask you the right questions, and provide you with the insight, tools and support to help you access your own inner wisdom. A consultant usually gives you specific advice on what to do, or actually do stuff for you, like writing your business plan or drafting your message. 
              </li>
            </ul>
          </Typography>
        </Paper>
      </CoachingWrapper>
    )
  }
}

// Coaching_Tab_Private_FR.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default withStyles(stylesTheme)(CoachingTab_QnA_FR)

const CoachingWrapper = styled.div`
  .questions {
    color: green;
  }
  .buttons {
    display: flex;
    justify-content: space-around;
  }
  .paper {
    margin: 2rem auto;
    /* width: 900px; */
  }
  .text {
    margin-top: 1rem;
    line-height: 3rem;
    font-size: 1rem;
    /* font-weight: bold; */
    text-align: justify;
  }
  .textFR {
    direction: rtl;
    font-family: "Vazir";
  }
  .intro {
    margin-top: 1rem;
    /* font-size: 1.5rem; */
    /* text-align: center; */
  }
  .introFR {
    direction: rtl;
    font-family: "Vazir";
  }
  .underline {
    width: 10rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 2rem auto;
  }
  .coachingType {
    margin: -0.5rem 0 -0.5rem 0;
    font-size: 0.8rem;
  }
  @media (min-width: 768px) {
    .paper {
      width: 80%;
    }
  }
  @media (min-width: 992px) {
    .paper {
      width: 70%;
    }
  }
  @media (min-width: 1292px) {
    .paper {
      width: 60%;
    }
  }
  @media (min-width: 1492px) {
    .paper {
      width: 50%;
    }
  }
  @media (max-width: 768px) {
    .paper {
      width: 90%;
    }
  }
`
