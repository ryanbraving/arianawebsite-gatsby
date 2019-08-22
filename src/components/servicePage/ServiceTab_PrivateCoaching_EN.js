import React, { Component } from "react"
// import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import classnames from "classnames"
import { styles, SectionButton } from "../../utils"
import { Link } from "gatsby"
import styled from "styled-components"

const stylesTheme = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
})
class CoachingTab_PrivateCoaching_FR extends Component {
  render() {
    const { classes } = this.props
    return (
      <CoachingWrapper>
        {/* <Section> */}
        <Paper className={classnames(classes.root, "paper")} elevation={20}>
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro")}
          >
            Private Coaching
          </Typography>
          <Typography component="h3" className={classnames("text")}>
            What is it that you so badly want to experience in your life? Is it
            more meaning? More joy? More peace? More love? More confidence? More
            energy? More success? More money? More power? You name it..
            <br />
            Whatever that something is, it is a part of your Ideal Life and my
            job is to help and support you to create that life for yourself.
            What could be a better deal than that?!
            <br />
            In order to experience coaching sessions with Ariana, you do not
            need to be physically present in her office. Ariana offers all her
            services remotely through Skype, WhatsApp, FaceTime or a humble old
            fashion phone call. Simplicity and ease are among Ariana’s life
            principles and that’s why she wants to reach you in the most
            comfortable and easy way. So, in order to experience coaching
            sessions with Ariana all you need is a burning desire and a
            commitment to create your ideal life + a reliable internet access or
            a phone.
          </Typography>
          <br />
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro")}
          >
            Money Back Guarantee
          </Typography>
          <Typography component="h3" className={classnames("text")}>
            If you are unsure on whether Ariana is the right coach for you or
            not, do not fret. Relax and reach out. because with our 100% money
            back guarantee, you have nothing to lose!
            <br />
            Your satisfaction is Ariana’s top priority and she is fully
            committed to offer you a wholehearted, top quality, and valuable
            service. That’s why if after the first session she feels, she is not
            the right person to lead you, she will transparently communicate
            with you and your payment will be fully returned. And this is a
            two-way road! Meaning, if after the first session you feel Ariana is
            not the right coach for you or if you don’t feel heard and
            understood, you will get a full refund.
          </Typography>
          <br />
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro")}
          >
            Ways of Working
          </Typography>
          <Typography component="h3" className={classnames("text")}>
            You can begin the process through purchasing an{" "}
            <span className="greenText">individual session</span> or one of the{" "}
            <span className="greenText">coaching packages</span> below. Ariana’s
            recommendation is to commit to one of the coaching packages. This
            way not only do you get to enjoy discounted rates, but also provide
            enough time for yourself and Ariana to dig deeper, get to the core
            of your issues and do some foundational work. If you are not sure
            which coaching package suits you best do not worry, just trust your
            gut and buy whatever feels right. During the coaching engagement, if
            you get your desired results early on or if Ariana feels her work is
            done, a fee equal to the remaining number of sessions will be
            returned to you. The coaching process can trigger old wounds and
            bring up suppressed memories. This would feel painful and unpleasant
            at first but sweet and liberating at the end. That’s why we want to
            encourage you to fully commit yourself to the process and allow
            enough time to get to heaven.
          </Typography>
          <Typography component="h3" className={classnames("text")}>
            <table>
              <tbody>
                <tr>
                  <th>Ways of Working</th>
                  <th>Number of Sessions</th>
                  <th>Discount</th>
                </tr>
                <tr>
                  <td>Individual Sessions</td>
                  <td>1 session</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Dig deep package</td>
                  <td>5 sessions</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Redesign and rebuild package</td>
                  <td>10 sessions</td>
                  <td>15%</td>
                </tr>
                <tr>
                  <td>Lifestyle package</td>
                  <td>15 sessions</td>
                  <td>20%</td>
                </tr>
              </tbody>
              <caption>Each session is 60 minutes.</caption>
              <caption>
                To ask about coaching fees please send an inquiry.
              </caption>
            </table>
          </Typography>
          <Typography component="h3" className={classnames("text")}>
            <br />
            <ul style={{ paddingLeft: "1rem" }} className="greenText">
              <li>
                Individual Sessions
                <br />
                <span>
                  <b>Number of sessions: 1</b>
                  <br />
                  One 60 minute coaching experience with Ariana. This is for you
                  if you need an occasional session or just need to get started.
                </span>
              </li>
              <Link
                to="/coaching.request"
                style={{ textDecoration: "none" }}
                state={{
                  coachingTypeRequest: "1 On 1",
                }}
              >
                <SectionButton style={{ margin: "2rem auto" }}>
                  Request
                  <h6 className="coachingType">(Individual Session)</h6>
                </SectionButton>
              </Link>
              <br />
              <li>Coaching Packages</li>
            </ul>
            <ul style={{ paddingLeft: "1rem", listStyleType: "none" }}>
              <li>
                <b className="coachingPackTitle">Dig deep package</b>
                <br />
                <b>Number of sessions: 5</b>
                <br />
                <b>Discount: 10%</b>
                <br />
                Five 60 minute sessions to work through your bounding issues and
                digging deep. The consistency of sessions provides you with the
                opportunity to not only be assisted with uncovering the
                underlying dynamics of where and why you are stuck, but also
                gives Ariana the opportunity to teach you pragmatic tools on how
                to set yourself free and re-calibrate your inner compass which
                is always pointing you to inner-peace and freedom. To get the
                most out of this package, Ariana’s recommendation is to schedule
                weekly sessions. This package is valid over a period of three
                months.
              </li>
              <Link
                to="/coaching.request"
                style={{ textDecoration: "none" }}
                state={{
                  coachingTypeRequest: "Dig Deep",
                }}
              >
                <SectionButton style={{ margin: "2rem auto" }}>
                  Request
                  <h6 className="coachingType">(Dig deep)</h6>
                </SectionButton>
              </Link>
              <br />
              <li style={{ paddingLeft: "1rem" }}>
                <b className="coachingPackTitle">
                  Redesign and rebuild package{" "}
                </b>
                <br />
                <b>Number of sessions: 10</b>
                <br />
                <b>Discount: 15%</b>
                <br />
                Ten 60 minute sessions to explore your deepest truth and
                re-design your life’s context where you feel trapped. This
                package provides enough time and space to dive deeper and do
                some hard-core detox. To get the most out of this package,
                Ariana’s recommendation is to schedule weekly or biweekly
                sessions. This package is valid over a six month period.
              </li>
              <Link
                to="/coaching.request"
                style={{ textDecoration: "none" }}
                state={{
                  coachingTypeRequest: "Rebuild & Redesign",
                }}
              >
                <SectionButton style={{ margin: "2rem auto" }}>
                  Request
                  <h6 className="coachingType">(Redesign and rebuild)</h6>
                </SectionButton>
              </Link>
              <br />
              <li style={{ paddingLeft: "1rem" }}>
                <b className="coachingPackTitle">Lifestyle package</b>
                <br />
                <b>Number of sessions: 15</b>
                <br />
                <b>Discount: 20%</b>
                <br />
                Fifteen 60 minute sessions over a six-month period. If you want to feel empowered to follow your personal goals and implement sustainable changes that set you up on your ideal life journey this package is for you. During this engagement Ariana will be your personal guide to decipher your limiting beliefs and ways of operating in the world while teaching you golden tools to breakthrough these self-limiting barriers. She will also act as your mentor to dig deep and connect with your heart’s deepest desires, clarify your goals, create your vision, and start building a staircase from where you currently are to where you want to be. During this process you will not only learn practical tools, but also gain valuable insight and knowledge that sets you up on a progressive path. The whole process makes you feel more confident, powerful, joyous, vibrant and healthier. 
                {/* <ul style={{ listStyleType: "none" }}>
                  <li style={{ marginTop: "1.5rem" }}>
                    (۱) شناخت باورهای محدود کننده و اقدام برای رهایی از این
                    محدودیت‌ها،
                  </li>
                  <li>(۲ ) درک نیازهای منحصر به فرد و خواسته های عمیق قلبی</li>
                  <li>(۳) رسیدن به شفافیت درونی و ویژنینگ</li>
                  <li style={{ marginBottom: "1.5rem" }}>
                    (۴) طراحی برنامه ای خاص برای روش زندگی با توجه به این
                    داده‌ها.
                  </li>
                </ul> */}
                {/* در طول این سفر شش ماهه، آریانا راهنما و مربی شخصی شما در ساخت یک
                راه پله ایمن برای صعود خواهد بود. صعود از جایی که در حال حاضر
                ایستاده‌اید به جایی که با همه وجود می‌خواهید باشید. برای استفاده
                بهینه از این جلسات، پیشنهاد آریانا اختصاص جلسات هفتگی برای پنج
                جلسه اول و دو هفته یکبار برای مابقی جلسات است. مدت اعتبار این
                بسته شش ماه است. */}
              </li>
              <Link
                to="/coaching.request"
                style={{ textDecoration: "none" }}
                state={{
                  coachingTypeRequest: "Life Technique",
                }}
              >
                <SectionButton style={{ margin: "2rem auto" }}>
                  Request
                  <h6 className="coachingType">(Lifestyle)</h6>
                </SectionButton>
              </Link>
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

export default withStyles(stylesTheme)(CoachingTab_PrivateCoaching_FR)

const CoachingWrapper = styled.div`
  .greenText {
    font-weight: bold;
    font-size: 1.2rem;
    color: green;
    span {
      font-weight: normal;
      font-size: 1rem;
      color: black;
    }
    li {
      font-size: 1.5rem;
    }
  }
  table,
  th,
  td {
    border: 1px solid grey;
    text-align: center;
  }
  table {
    width: 60%;
    margin: 3rem auto;
  }
  th {
    font-size: 1.15rem;
    color: green;
  }
  caption {
    caption-side: bottom;
    margin-top: 1.2rem;
    font-size: 0.9rem;
    line-height: 1rem;
  }
  .coachingPackTitle {
    border-bottom: 2px solid currentColor;
    font-weight: bold;
    font-size: 1.2rem;
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
