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
class AboutTab_Education_FR extends Component {
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
                        Ariana's Coaching Trainings
                      </Typography>
                      <Typography component="h3" className={classnames("text")}>
                        Dr Ariana graduated from the Martha Beck Institute where
                        she studied the science behind life transformation, the
                        art of thought dissolving and practical tools to
                        consolidate change. She has also studied with the
                        Institute for Integrative Nutrition where she learned
                        innovative coaching methods, practical lifestyle
                        management techniques, and over 100 dietary theories –
                        Ayurveda, gluten-free, Paleo, raw, vegan, macrobiotics,
                        and everything in between.
                        <br />
                        More than that during the past 10 years of her life she
                        has been studying mindfulness practices and spiritual
                        personal growth literature avidly. All her life has been
                        and is about realizing what life is really about and
                        seeking her own liberation. So whatever she is
                        delivering to her clients has been experimented and
                        tested at least through her own personal journey. Ariana
                        is a coach who really walks her talk and deeply believes
                        in what she does. She really is a pretty damn unique
                        combo.
                        <br />
                        Her education has equipped her with extensive,
                        cutting-edge knowledge in understanding human behaviour,
                        habit changing, holistic nutrition, health coaching, and
                        prevention. Drawing on her expertise. She can
                        confidently guarantee you that each session will leave
                        you feeling inspired and motivated. Each session would
                        leave you inspired to bring balance to the most
                        important elements of your life such as connection to
                        self, love and relationships, health and diet, career
                        and money. She will personally and carefully guide you
                        to make simple, small changes that transform your life.
                        <br />
                        It worth mentioning that during her journey so far, she
                        has had the studentship honour of some world's top
                        spirituality, personal growth, holistic health experts,
                        as well as psychologists and neuroscientists including:
                        <ul style={{ paddingLeft: "1rem" }}>
                          <li>
                            <b>Martha Beck, PhD,</b> life coach, sociologist,
                            president of Martha Beck, Inc.
                          </li>
                          <li>
                            <b>Brene Brown, PhD,</b> leader in the field of
                            courage, vulnerability, shame, and empathy, research
                            professor at the University of Houston
                          </li>
                          <li>
                            <b>Gretchen Rubin,</b> leader on subjects of habits,
                            happiness, and human nature, author, blogger,
                            speaker
                          </li>
                          <li>
                            <b>Iyanla Vanzant,</b> life coach and author
                          </li>
                          <li>
                            <b>Gabrielle Bernstein,</b> life coach and author
                          </li>
                          <li>
                            <b>Eckhart Tolle,</b> spiritual teacher, author
                          </li>
                          <li>
                            <b>Deepak Chopra, MD,</b> leader in the field of
                            mind-body medicine
                          </li>
                          <li>
                            <b>Tara Brach, PhD,</b> psychologist, author
                          </li>
                          <li>
                            <b>Steven Hayes, PhD,</b> expert on potent synthesis
                            of mindfulness and behavior-changing cognitive
                            therapy
                          </li>
                          <li>
                            <b>Bruce H. Lipton, PhD,</b> Stem cell biologist, an
                            internationally recognized leader in bridging
                            science and spirit, author and recipient of the 2009
                            Goi Peace Award
                          </li>
                          <li>
                            <b>Rick Hanson, PhD,</b> neuroscientist, expert in
                            practical neuroscience of lasting happiness, author
                          </li>
                          <li>
                            <b>Cristian Northrup, M.D,</b> board-certified
                            OB/GYN physician, a visionary pioneer and a leading
                            authority in the field of women’s health and
                            wellness, clinical professor of OB/GYN at Maine
                            medical center
                          </li>
                          <li>
                            <b>David Katz, MD,</b> MPH, director of Yale
                            University’s Prevention Research Center
                          </li>
                          <li>
                            <b>Walter Willett, MD,</b> DrPH, chair of nutrition
                            at Harvard University
                          </li>
                          <li>
                            <b>Andrew Weil, MD,</b> director of the Arizona
                            Center for Integrative Medicine
                          </li>
                          <li>
                            <b>Susan Blum, MD,</b> MPH, assistant clinical
                            professor at Mount Sinai School of Medicine
                          </li>
                          <li>
                            <b>Mark Hyman, MD,</b> founder of The UltraWellness
                            Center
                          </li>
                          <li>
                            <b>Marion Nestle, PhD,</b> MPH, professor at New
                            York University’s Department of Nutrition, Food
                            Studies, and Public Health
                          </li>
                          <li>
                            <b>Neal Barnard, MD,</b> author and Founding
                            President of the Physicians Committee for
                            Responsible Medicine
                          </li>
                          <li>
                            <b>Joel Fuhrman, MD,</b> family physician and
                            leading expert on nutritional healing
                          </li>
                          <li>
                            <b>Bernie Siegel, MD,</b> author and expert in
                            healing and patient empowerment
                          </li>
                          <li>
                            <b>John Douillard, MD,</b> Ayurvedic Physician,
                            Writer, Professor and Chiropractor specializing in
                            Sports Medicine
                          </li>
                          <li>
                            <b>
                              Joshua Rosenthal, MScEd, founder and director of
                              the Institute for Integrative Nutrition
                            </b>
                          </li>
                          <li>
                            <b>
                              Ariana Hoffington, co-founder and editor-in-Chief
                              of The Huffington Post, author
                            </b>
                          </li>
                          <li>
                            <b>Elizabeth Gilbert,</b> author and essayist
                          </li>
                          <li>
                            <b>Glennon Doyle,</b> activist and author
                          </li>
                          <li>
                            <b>Daniel Vitalis,</b> health motivator and
                            strategist
                          </li>
                          <li>
                            <b>Geneen Roth,</b> author and expert on emotional
                            eating
                          </li>
                          <li>
                            <b>Manisha Thakor, CFA,</b> director of wealth
                            strategies for women at buckingham & the bam
                            alliance founder, MoneyZen LLC
                          </li>
                          {/* <div className="underline" /> */}
                        </ul>
                      </Typography>
                    </Paper>
    </AboutWrapper>
  )
}
}

// Coaching_Tab_Private_FR.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default withStyles(stylesTheme)(AboutTab_Education_FR)

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