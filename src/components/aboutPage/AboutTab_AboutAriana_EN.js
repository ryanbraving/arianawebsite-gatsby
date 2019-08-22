import React, { Component } from "react"
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
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
})
class AboutTab_AboutAriana_FR extends Component {
  render() {
    const { classes } = this.props
    return (
      <AboutWrapper>
        <Paper className={classnames(classes.root, "paper")} elevation={20}>
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro")}
          >
            Hello!
          </Typography>
          <Typography component="p" className={classnames("text")}>
            I am Ariana Braving, a certified life and wellness coach. I am here
            to help you realize and actualize your hearts’ wildest desires. I am
            here to help and support you to create a life of harmony, peace, and
            joy. A life that fulfills your highest potential and gives your soul
            ultimate satisfaction!
            <br />I am in love with what I do, and the level of my joy is my
            success tracker. But my road to this beautiful sacred work was not a
            well paved and straight one, rather a challenging, long and painful
            one!
            <br />
            From early childhood I was obsessed with learning and knowing. I was
            ambitious and wanted to climb the mountain high. So, I tried to do
            it the only way my upbringing had taught me which was through
            academic education and career success. As a result, I studied for 28
            years in a row! I worked hard to gain a PhD degree in
            Bio-Nanotechnology, followed by a post-doc and a prestigious science
            job. I married, migrated to the most grounded and beautiful country
            on Earth (New Zealand), bought my favorite car and a beautiful
            house. I was living the life that my culture and upbringing was
            calling a successful life. I was experiencing an abundant and
            privileged life. I was travelling the world, wearing branded
            clothing and dining at fancy restaurants. But something was wrong
            because I was deeply unhappy! All these apparent successes and
            accomplishments felt superficial and meaningless. Each achievement
            momentarily made me happy, but I was experiencing an intense inner
            melancholy. While I had no excuse for being gloomy and depressed!
            Everything on the outer shell of my life was per plan, in high
            standard, pristine and beautiful. My conditioned mind was wondering
            what’s wrong with me? Am I just genetically depressed? Why am I so
            messed up? Why can’t I live a normal life?
            <br />
            But deep in my heart, I knew all the answers. The problem was I
            wouldn’t dare to listen!
            <br />
            All I was doing was trying hard to follow pop culture and make my
            parents proud. In the process though I developed a melancholy tumor
            which I knew soon will manifest itself as a terminal illness! With
            this intense feeling, I decided to fuck pop culture and tune into my
            own sense of integrity and truth. On this new daunting road, the
            first thing I did was resigning from my prestigious job! Because
            deep in my soul I knew this is not what I meant to do in this world.
            Since childhood I had a strong vision of being a clear channel for
            serving people on the road of transformation and healing. I knew
            that the shit hole I was experiencing in my life, was hand made
            through my own choices. I was the one who repeatedly chose to ignore
            my intuition and follow culture. I clearly knew my calling and I
            couldn’t lie to myself anymore. But honestly it was the depth of
            misery and pain I was feeling in my heart that forced me to fully
            commit myself to rip the layers of lies from my life and come home
            to myself. You see I didn’t do all this hard -but liberating- work
            because I was brave or enlightened! It was a matter of evolve or
            die! It was the combination of an ever increasing and unbearable
            momentum of inner suffering and the small, still voice that was
            constantly whispering into my ears “This is not your life! You are
            an imposter. You are wasting your potential and your opportunity to
            live a wild, fulfilling and meaningful life. Go and live your own
            life...”
            <br />
            Listening to this small still voice led me to a HUGE breakthrough.
            To a metamorphosis…
            <br />
            After fully dedicating myself to do the work, rooting into my own
            sense of integrity and going through intensive self-healing and
            spiritual growth practices, I could finally dare to embark on my own
            ideal life journey.
            <br />
            My search to make sense of my own life and get myself to the light
            allowed me to do the work I was meant to do in the world. Coaching
            and writing. Honestly, I don’t like the name coaching that much but
            it doesn’t matter. What does matter is the truth of it. Of what it
            does. It adjusts our perception lens and rips us off all the layers
            of painful thoughts and fears and lies and suffering so that we can
            perceive our own Truth. From there creating our ideal life is a
            natural and joyous journey.
            <br />
            Now that I am working as a life & wellness coach, I see that my
            story is the story of many of us. I see more and more people every
            day who are living privileged lives but are deeply unhappy. This is
            very unfortunate because we are all meant to fulfill our highest
            potential and live joyous lives. I have wholeheartedly dedicated my
            remaining lifetime to be your guide to get there. To a place where
            no matter your current life circumstances; you can not only see the
            light at the end of the tunnel, but also embrace your own light and
            power. To a place where you are empowered enough to take charge and
            create your ideal life. To a place where you can shine bright like a
            diamond because you are a unique diamond. All of us are...
            <br />
            My life vision is to let myself be like a hollow flute for the
            divine to flow through and use me as a vehicle to share my original
            medicine with humanity with utmost love and compassion. My vision
            for this website is a platform to share my experiences, my truth and
            my knowledge with the world. I want this platform to be a shared
            space between me and you to connect, share and see each other in
            love. As a result, lift each other up and walk toward light hand in
            hand.
            <br />
            <b>Lots of love, Ariana</b>
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
