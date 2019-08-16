import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import purple from "@material-ui/core/colors/purple"
import styled from "styled-components"
import { styles, SectionButton, RTL } from "../../utils"
import firebase from "../../firebase/FirebaseConfigs"
// import SendVerificationEmail from "../aws/AWS-SendVerificationEmail";

const db = firebase.firestore()
// const colorPick = yellow[800];
const colorPick = styles.colors.mainYellow
const stylesMaterialui = theme => ({
  container: {
    display: "block",
    // flexWrap: "wrap"
  },
  textField: {
    marginTop: "1.5rem",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
    margin: theme.spacing.unit,
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
    email: "",
    thankName: "",
    hideSubscribe: true,
    clientInfo: null,
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

  addEmail = e => {
    e.preventDefault()
    const dbName = this.state.name
    const dbEmail = this.state.email
    const dbClientInfo = this.state.clientInfo
    this.setState({
      thankName: this.state.name,
      name: "",
      email: "",
      hideSubscribe: false,
    })

    const timeNow = firebase.firestore.FieldValue.serverTimestamp()
    var refDoc = db
      .collection("Unverified-Emails-FR")
      // .doc(dbEmail.toLowerCase());
      .doc()
    refDoc
      .set({
        docId: refDoc.id,
        email: dbEmail,
        name: dbName,
        verified: false,
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
    const { classes } = this.props

    return (
      <FormWrapper hideSubscribe={this.state.hideSubscribe}>
        <form
          className={
            this.state.hideSubscribe
              ? classNames(classes.container, "form-show")
              : classNames(classes.container, "form-hide")
          }
          autoComplete="off"
          onSubmit={this.addEmail}
        >
          <RTL>
            <MuiThemeProvider theme={theme}>
              <div dir="rtl">
                <TextField
                  id="outlined-name"
                  label="نام و نام خانوادگی"
                  helperText="لطفا نام کامل خود را وارد کنید"
                  value={this.state.name}
                  onChange={this.handleChange("name")}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                  className={classes.textField}
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
                  label="ایمیل"
                  helperText="ایمیل شما با کسی به اشتراک گذاشته نمی شود"
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                  type="email"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                  className={classes.textField}
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
              </div>
            </MuiThemeProvider>
          </RTL>

          <SectionButton
            type="submit"
            // className="subscribeBtn"
            style={{
              margin: "2rem auto",
              fontFamily: "Vazir",
              fontSize: "1.5rem",
              letterSpacing: "0.1rem",
            }}
          >
            اشتراک
          </SectionButton>

          {/* <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            className={classNames(classes.margin, classes.cssRoot)}
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
          تشکر <span className="thanks-name">{this.state.thankName}</span> برای
          درخواست اشتراک. <br /> یک ایمیل هم اکنون برای شما ارسال شد.
          <br />
          برای تکمیل مراحل اشتراک، لطفا به ایمیل خود مراجعه کنید.
        </h1>

        <p className={this.state.hideSubscribe ? "thanks-hide" : "thanks-show"}>
          اگر برای اشتراک و دریافت ایمیل با مشکلی مواجه شدید، لطفا توسط این
          ایمیل اطلاع دهید: info@ArianaBraving.com
        </p>
      </FormWrapper>
    )
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(stylesMaterialui)(OutlinedTextFields)

const FormWrapper = styled.div`
  height: 290px;
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
    direction: rtl;
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
    direction: rtl;
  }
`
