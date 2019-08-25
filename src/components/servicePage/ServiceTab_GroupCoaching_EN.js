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
class CoachingTab_GroupCoaching_FR extends Component {
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
            Group Coaching
          </Typography>
          <Typography component="h3" className={classnames("text")}>
            <p>
              Some folks prefer group coaching over private coaching and feel
              it’s more effective and beneficial. The truth is that a
              challenging journey is always better with companions who share
              similar goals. Traveling alone can feel unsafe and daunting, but
              the companionship is empowering and creates a sense of safety and
              protection. Besides, the good news is your investment on group
              coaching is less than private coaching packages.
              <br />
              Learning alongside a warm and friendly group of like-minded people
              can be empowering and energizing. Usually hearing other people’s
              stories and limiting beliefs is a powerful wake-up call to
              recognise your own limiting beliefs and blind spots. Moreover,
              witnessing the progress of other group members is not only
              inspiring but a motivational lever to move you forward in your
              path. And most importantly through joining a group coaching
              program you will get the chance to find your tribe and build
              meaningful friendships with your group members.
            </p>
            <p>
              Currently group coaching is offered in the following subjects:
            </p>
            <br />
            <ul
              style={{
                paddingLeft: "1.2rem",
                fontSize: "1.17rem",
                fontWeight: "bold",
              }}
            >
              <li>Self acceptance and self confidence</li>
              <li>Recognising limiting beliefs and brain rewiring </li>
              <li>Stress management and peace invitation</li>
            </ul>
            <br />
            <p>
              Each group consists of a minimum of four and a maximum of eight
              participants. 75 minutes online sessions will be held weekly for
              five weeks. During these sessions Ariana will follow a curated
              program. At the end of the program you will leave with required
              knowledge, insight, and pragmatic tools to deal with your
              challenges in an effective and empowered way. During each session
              Ariana will deliver a 30-40 minutes long lecture and dedicate the
              remaining time to coach you and answer your questions. At the end
              of each session you will be given homework for the following week.
              Your 100% commitment to your own growth and allocation of enough
              time to reflect on materials and doing your homework is crucial
              for your success. It’s worth noting that sessions will be recorded
              and sent to you. So you will have lifetime access to each class
              and would be able to review materials over time. Besides, you will
              be joined to a private Facebook group where you can connect to
              other group members to support each other during this journey and
              celebrate your achievements. For the duration of the program
              Ariana will have regular presence and offers support in the FB
              group but you will have permanent access to this group and can
              continue to deepen your connections, support each other's growth,
              and lift each other up.
            </p>
            <br />
            <p>
              To submit your interest please send a request through bellow link.
            </p>
            <Link
              to="/coaching.group.request"
              style={{ textDecoration: "none" }}
              state={{
                coachingTypeRequest: "Group-Coaching",
              }}
            >
              <SectionButton style={{ margin: "2rem auto" }}>
                Request
                <h6 className="coachingType">(Group Coaching)</h6>
              </SectionButton>
            </Link>
          </Typography>
        </Paper>
      </CoachingWrapper>
    )
  }
}

// Coaching_Tab_Private_FR.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default withStyles(stylesTheme)(CoachingTab_GroupCoaching_FR)

const CoachingWrapper = styled.div`
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
