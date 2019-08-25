import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import purple from "@material-ui/core/colors/purple"
import styled from "styled-components"
import { styles, SectionButton, Section } from "../../utils"
import firebase from "../../firebase/FirebaseConfigs"

const db = firebase.firestore()
const colorPick = styles.colors.mainYellow
const stylesMaterialui = theme => ({
  container: {
    display: "block",
    // flexWrap: "wrap"
  },
  textField: {
    marginTop: "1.5rem",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // width: 600
  },

  root: {
    flexGrow: 1,
  },
  cssLabel: {
    "&$cssFocused": {
      color: colorPick,
    },
  },
  cssFocused: {},

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: colorPick,
    },
  },
  notchedOutline: {},
  margin: {
    margin: theme.spacing(1),
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
})

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  direction: "rtl", // Both here and <body dir="rtl">
})

class OutlinedTextFields extends React.Component {
  state = {
    name: "",
    country: "",
    email: "",
    phoneNo: "",
    telegramId: "",
    howFindAriana: "",
    whyCoaching: "",
    explaination: "",
    mainProblem: "",
    otherProblem: "",
    expectation: "",
    obstacle: "",
    thankName: "",
    hideSubscribe: true,
    clientInfo: null,
    coachingTypeRequest: "",
  }

  componentDidMount() {
    // var request = new Request("https://api.ipdata.co/?api-key=test");
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url2 = "https://ipinfo.io/json"
    const url1 = "https://api.ipdata.co/?api-key=test"
    // fetch(proxyurl + url)
    // fetch(request, { mode: "no-cors" })
    fetch(url1)
      .then(response => response.json())
      .then(data => {
        //if url1 return null then try url2
        if (!data.ip) {
          fetch(url2)
            .then(response => response.json())
            .then(data => {
              data.provider = "url2: ipinfo"
              data.country_name = data.country
              this.setState({ clientInfo: data })
            })
        } else {
          data.provider = "url1: ipdata"
          this.setState({ clientInfo: data })
        }
      })
  }

  handleChange = arg => event => {
    this.setState({
      [arg]: event.target.value,
    })
  }

  addCoachingRequest = e => {
    e.preventDefault()
    const dbName = this.state.name
    const dbCountry = this.state.country
    const dbEmail = this.state.email
    const dbPhoneNo = this.state.phoneNo
    const dbTelegramId = this.state.telegramId
    const dbHowFindAriana = this.state.howFindAriana
    const dbWhyCoaching = this.state.whyCoaching
    const dbExplaination = this.state.explaination
    const dbMainProblem = this.state.mainProblem
    const dbOtherProblem = this.state.otherProblem
    const dbExpectation = this.state.expectation
    const dbObstacle = this.state.obstacle
    const dbClientInfo = this.state.clientInfo
    const dbCoachingTypeRequest = this.state.coachingTypeRequest
    this.setState({
      thankName: this.state.name,
      name: "",
      country: "",
      email: "",
      phoneNo: 0,
      telegramId: "",
      howFindAriana: "",
      whyCoaching: "",
      explaination: "",
      mainProblem: "",
      otherProblem: "",
      expectation: "",
      obstacle: "",
      hideSubscribe: false,
      coachingTypeRequest: "",
    })

    const timeNow = firebase.firestore.FieldValue.serverTimestamp()
    var refDoc = db
      .collection("Request-PrivateCoaching-EN")
      // .doc(dbEmail.toLowerCase());
      .doc()
    refDoc
      .set({
        docId: refDoc.id,
        name: dbName,
        country: dbCountry,
        email: dbEmail,
        phone: dbPhoneNo,
        telegram: dbTelegramId,
        howFindAriana: dbHowFindAriana,
        whyCoaching: dbWhyCoaching,
        explaination: dbExplaination,
        mainProblem: dbMainProblem,
        otherProblem: dbOtherProblem,
        expectation: dbExpectation,
        obstacle: dbObstacle,
        coachingTypeRequest: dbCoachingTypeRequest,
        createdAt: timeNow,
        clientInfo: dbClientInfo,
      })
      .then(function() {
        // console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error)
      })
    // this.sendEmail(dbName, dbEmail);
  }

  // sendEmail = (name, email) => {
  //   SendVerificationEmail(email);
  // };

  render() {
    const { classes, coachingTypeRequest } = this.props
    this.state.coachingTypeRequest = coachingTypeRequest
    return (
      <Section>
        <FormWrapper hideSubscribe={this.state.hideSubscribe}>
          <form
            className={
              this.state.hideSubscribe
                ? classnames(classes.container, "form-show")
                : classnames(classes.container, "form-hide")
            }
            autoComplete="off"
            onSubmit={this.addCoachingRequest}
          >
            <MuiThemeProvider theme={theme}>
              <TextField
                id="outlined-name"
                label="Name"
                helperText="Pleae enter your full name"
                value={this.state.name}
                onChange={this.handleChange("name")}
                margin="normal"
                variant="outlined"
                // fullWidth
                required
                className={classes.textField}
                style={{ width: 300 }}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              <TextField
                id="outlined-helperText"
                label="Where do you live? (country & city)"
                helperText="To find out the time defference"
                value={this.state.country}
                onChange={this.handleChange("country")}
                margin="normal"
                variant="outlined"
                // fullWidth
                required
                className={classes.textField}
                style={{ width: 300 }}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />

              <TextField
                id="outlined-email-input"
                label="Email"
                helperText="We'll never share your email"
                value={this.state.email}
                onChange={this.handleChange("email")}
                type="email"
                margin="normal"
                variant="outlined"
                // fullWidth
                required
                className={classes.textField}
                style={{ width: 300 }}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              <TextField
                id="outlined-number"
                label="Phone No."
                helperText=""
                value={this.state.phoneNo}
                onChange={this.handleChange("phoneNo")}
                type="number"
                margin="normal"
                variant="outlined"
                // fullWidth
                className={classes.textField}
                style={{ width: 300 }}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              <TextField
                id="outlined-helperText"
                label="Telegram Id."
                helperText="If you don't have a Telegram Id, enter your phone number associated with your Telegram account."
                value={this.state.telegramId}
                onChange={this.handleChange("telegramId")}
                margin="normal"
                variant="outlined"
                className={classes.textField}
                // style={{ fontSize: "1.6rem" }}
                style={{ width: 300 }}
                // fullWidth
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              <TextField
                id="outlined-helperText"
                label="How did you find Ariana?"
                helperText=""
                value={this.state.howFindAriana}
                onChange={this.handleChange("howFindAriana")}
                margin="normal"
                variant="outlined"
                // fullWidth
                required
                className={classes.textField}
                style={{ width: 300 }}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              <TextField
                id="outlined-multiline-static"
                multiline
                rows="4"
                label="Write a brief description of your current life."
                helperText="occupation, marital status, number of children, personal interests, ..."
                value={this.state.explaination}
                onChange={this.handleChange("explaination")}
                margin="normal"
                variant="outlined"
                required
                className={classes.textField}
                // style={{ fontSize: "1.6rem" }}
                // style={{ width: 300 }}
                fullWidth
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              <TextField
                id="outlined-multiline-static"
                multiline
                rows="4"
                label="Why do you need coaching?"
                helperText="What must change now (please explain briefly)"
                value={this.state.whyCoaching}
                onChange={this.handleChange("whyCoaching")}
                margin="normal"
                variant="outlined"
                required
                className={classes.textField}
                // style={{ fontSize: "1.6rem" }}
                // style={{ width: 300 }}
                fullWidth
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              <TextField
                id="outlined-multiline-static"
                multiline
                rows="4"
                label="What is your biggest challange you are experiencing right now regarding this issue?"
                // helperText="شغل، وضعیت تاهل، تعداد فرزندان، علایق شخصی و ..."
                value={this.state.mainProblem}
                onChange={this.handleChange("mainProblem")}
                margin="normal"
                variant="outlined"
                required
                className={classes.textField}
                // style={{ fontSize: "1.6rem" }}
                // style={{ width: 300 }}
                fullWidth
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              <TextField
                id="outlined-multiline-static"
                multiline
                rows="4"
                label="What other things in your life are out of harmony?"
                // helperText="شغل، وضعیت تاهل، تعداد فرزندان، علایق شخصی و ..."
                value={this.state.otherProblem}
                onChange={this.handleChange("otherProblem")}
                margin="normal"
                variant="outlined"
                // required
                className={classes.textField}
                // style={{ fontSize: "1.6rem" }}
                // style={{ width: 300 }}
                fullWidth
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              <TextField
                id="outlined-multiline-static"
                multiline
                rows="4"
                label="What are you hoping to get out of this coaching engagement?"
                // helperText="شغل، وضعیت تاهل، تعداد فرزندان، علایق شخصی و ..."
                value={this.state.expectation}
                onChange={this.handleChange("expectation")}
                margin="normal"
                variant="outlined"
                required
                className={classes.textField}
                // style={{ fontSize: "1.6rem" }}
                // style={{ width: 300 }}
                fullWidth
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              <TextField
                id="outlined-multiline-static"
                multiline
                rows="4"
                label="What do you think is blocking you from achieving your desired outcome?"
                // helperText="شغل، وضعیت تاهل، تعداد فرزندان، علایق شخصی و ..."
                value={this.state.obstacle}
                onChange={this.handleChange("obstacle")}
                margin="normal"
                variant="outlined"
                required
                className={classes.textField}
                // style={{ fontSize: "1.6rem" }}
                // style={{ width: 300 }}
                fullWidth
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </MuiThemeProvider>

            <SectionButton
              type="submit"
              className={classnames(classes.margin)}
              style={{ margin: "2rem auto" }}
            >
              Submit
            </SectionButton>

            {/* <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            className={classnames(classes.margin, classes.cssRoot)}
          >
            Subscribe
          </Button> */}
          </form>
          <h1
            className={
              this.state.hideSubscribe
                ? "thanks thanks-hide"
                : "thanks thanks-show"
            }
          >
            Thanks <span className="thanks-name">{this.state.thankName}</span>
            <br /> Your form has been received.
            <br />
            Someone from Ariana's support team will contact you soon.
          </h1>

          <p
            className={this.state.hideSubscribe ? "thanks-hide" : "thanks-show"}
          >
            If you haven't received any contact within 3 working days, please
            let us know through email at:{" "}
            <span style={{ color: "red" }}>info@ArianaBraving.com</span> or
            through Telegram at:{" "}
            <span style={{ color: "red" }}>@AskAriana</span>
          </p>
        </FormWrapper>
      </Section>
    )
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(stylesMaterialui)(OutlinedTextFields)

const FormWrapper = styled.div`
  /* height: 690px; */
  margin: 2rem auto;
  .form-show {
    /* display: ${props => (props.hideSubscribe ? "block" : "none")}; */
    opacity: 1;
    visibility: visible; 
  }
  .form-hide {
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
    height:0px;
    /* overflow:hiden; */
  }
  .thanks{
    margin: 1rem auto;
    color: ${styles.colors.mainGrey};
    font-size: 1.3rem;
    letter-spacing: 0rem;
    text-align: center;
    line-height: 4.7rem;
    word-spacing: 0.2rem;
  }
  .thanks-hide {
    opacity: 0;
    visibility: hidden; 
  }
  .thanks-show {
    -webkit-transition: 2s;
    -moz-transition: 2s;
    -o-transition: 2s;
    transition: 2s;
    opacity: 1;
    visibility: visible; 
  }
  .thanks-name{
    text-transform: capitalize;
    color: ${styles.colors.mainYellow};
  }
  p{
    font-style:italic;
    font-size: 0.9rem;
    text-align: center;
  }
`
