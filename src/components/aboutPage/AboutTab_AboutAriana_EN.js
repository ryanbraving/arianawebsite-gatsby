import React, { Component } from 'react'
// import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import classnames from "classnames"
import { styles } from "../../utils"
import styled from "styled-components"


const stylesTheme = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})
class AboutTab_AboutAriana_FR extends Component {
  render() {
    const { classes } = this.props
    return (
    <AboutWrapper>
        <Paper
                      className={classnames(classes.root, "paper")}
                      elevation={20}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        className={classnames("intro")}
                      >
                        Who am I?
                      </Typography>
                      <Typography component="p" className={classnames("text")}>
                        That’s the fundamental question of my life! But…I don’t
                        want to bother you on this subject here….and I totally
                        give you the right to know who am I -at least on some
                        level- and what is my mission as a coach and vision with
                        this website. So here we go:
                        <br />I am a well-trained Life Coach through Martha Beck
                        Institute and Health Coach trough the Institute for
                        Integrative Nutrition. I chose these specific training
                        programs because I needed the stuff to help myself get
                        going in my life journey. I see our life as a road trip.
                        To have a safe and enjoyable road trip, I believe we
                        must make sure the car is safe and sound (our physical
                        body), the engine works well (our mind) and the driver
                        is in full control of the car (our soul). So, you see, I
                        think our body is the vehicle to contain and carry our
                        soul into the road trip of our life. Of course, our mind
                        is the car engine which runs, controls and regulates the
                        dynamic movement of the car. Now imagine if the car
                        engine -the mind - is full of junk, it may mix oil and
                        water and break down. In this case, no matter how good
                        looking the exterior of the car is or which made and
                        model it is -the body-, the car is not going to move.
                        Even if it does, it will be a miserable ride and we
                        don’t want that. The truth is when the car is broken,
                        the car’s driver -the soul- can’t get far no matter how
                        divine it is and how badly she wants to get home. We are
                        mind/body/spirit combo and figuring out how to find the
                        balance and realizing our dreams isn’t an easy task.
                        Actually, it needs a lot of hard work! We need to arrive
                        into our body and take charge of our vitality, we need
                        to declutter our mind from the rusty thoughts and belief
                        systems that are not serving us anymore, and enable our
                        soul to claim its power and be in full control of the
                        vehicle so we can enjoy our road trip to the fullest.
                        <br /> I needed to learn how to approach my health and
                        maintain a healthy vibrant lifestyle so I embarked on
                        the best in-depth holistic health coach training program
                        I could find to integrate and consolidate all my
                        knowledge in this area. Also, I seriously needed to
                        learn practical tools that I could use (on a daily basis
                        and no matter what is going on around me) on how to keep
                        my mind clear and how to fine-tune my perspectives and
                        catch my limiting beliefs and replace them with new
                        shiny good ones. Honestly, I struggled with this bit for
                        over 10 years and finally I said hands down, I am going
                        to take part in this awesome life coach training program
                        because for a whole year I can be coached intensively
                        and learn tools.
                        <br /> My life mission is to let myself be like a hollow
                        flute for divine to flow through and use me as a vehicle
                        to share my original medicine with humanity with utmost
                        love and compassion. My vision for the website is a
                        platform to share my experiences, my truth and my
                        knowledge with the world. I want this platform to be a
                        shared space between me and you to connect, share and
                        see each other in love. As a result, lift each other up
                        and walk toward light hand in hand.
                        <br />
                        Oh I almost forgot to tell you I love love love being in
                        raw nature, traveling, eating good yummy foods, reading
                        and of course having fun with friends and family. Yoga
                        and walking/hiking are my favorite type of physical
                        exercise.
                        <br />
                        <b>Loads of love Aria</b>
                      </Typography>
                    </Paper>            
    </AboutWrapper>
  )
}
}

// Coaching_Tab_Private_FR.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default withStyles(stylesTheme)(AboutTab_AboutAriana_FR)

const AboutWrapper = styled.div`
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