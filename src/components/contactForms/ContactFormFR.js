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
import { styles, SectionButton, RTL } from "../../utils"
import firebase from "../../firebase/FirebaseConfigs"

const db = firebase.firestore()
const colorPick = styles.colors.mainYellow
const stylesMaterialui = theme => ({
  container: {
    display: "block",
    // flexWrap: "wrap",
  },
  textField: {
    marginTop: "1.5rem",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // width: 300,
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
    email: "",
    phoneOrtId: "",
    comment: "",
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

  addContact = e => {
    e.preventDefault()
    const dbName = this.state.name
    const dbEmail = this.state.email
    const dbPhoneOrtId = this.state.phoneOrtId
    const dbComment = this.state.comment
    const dbClientInfo = this.state.clientInfo
    this.setState({
      thankName: this.state.name,
      name: "",
      email: "",
      phoneNo: 0,
      phoneOrtId: "",
      comment: "",
      hideSubscribe: false,
    })

    const timeNow = firebase.firestore.FieldValue.serverTimestamp()
    var refDoc = db
      .collection("Contact-FR")
      // .doc(dbEmail.toLowerCase());
      .doc()
    refDoc
      .set({
        docId: refDoc.id,
        name: dbName,
        email: dbEmail,
        phoneOrtId: dbPhoneOrtId,
        comment: dbComment,
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
              ? classnames(classes.container, "form-show")
              : classnames(classes.container, "form-hide")
          }
          autoComplete="off"
          onSubmit={this.addContact}
        >
          <RTL>
            <MuiThemeProvider theme={theme}>
              <div dir="rtl">
                <TextField
                  id="outlined-name"
                  label="نام و نام خانوادگی"
                  helperText="نام کامل خود را وارد کنید"
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
                  id="outlined-email-input"
                  label="ایمیل"
                  // helperText="ایمیل شما با کسی به اشتراک گذاشته نمی شود"
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                  type="email"
                  margin="normal"
                  variant="outlined"
                  // fullWidth
                  // required
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
                  label="شماره تلفن یا نام کاربری تلگرام "
                  // helperText="در صورتیکه نام کاربری برای تلگرام ندارید، شماره تلفن تلگرام خود را وارد کنید"
                  value={this.state.phoneOrtId}
                  onChange={this.handleChange("phoneOrtId")}
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
                  id="outlined-multiline-static"
                  multiline
                  rows="4"
                  label="پیغام"
                  // helperText="بصورت خلاصه توضیح دهید به چه علت و برای چه موضوعی نیاز به مشاوره و کوچینگ با آریانا دارید؟"
                  value={this.state.comment}
                  onChange={this.handleChange("comment")}
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
              </div>
            </MuiThemeProvider>
          </RTL>

          <SectionButton
            type="submit"
            // className="subscribeBtn"
            style={{
              margin: "2rem auto 0rem auto",
              fontFamily: "Vazir",
              fontSize: "1.5rem",
              letterSpacing: "0.1rem",
            }}
          >
            ارسال
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
          تشکر <span className="thanks-name">{this.state.thankName}</span>
          <br /> پیغام شما دریافت شد.
          <br />
          بزودی یک نفر از تیم پشتیبان آریانا با شما تماس می گیرد.
        </h1>

        <p className={this.state.hideSubscribe ? "thanks-hide" : "thanks-show"}>
          اگر در مدت سه روز کاری کسی با شما تماس نگرفت، لطفا توسط ایمیل:{" "}
          <span style={{ color: "red" }}>info@ArianaBraving.com</span> یا
          تلگرام: <span style={{ color: "red" }}>AskAriana@</span> اطلاع دهید.
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
 /* background: red; */
  /* height: 690px; */
  margin: 0rem auto;
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
    margin: 0rem auto 1rem auto;
    color: ${styles.colors.mainGrey};
    font-size: 1.3rem;
    letter-spacing: 0rem;
    text-align: center;
    line-height: 3.7rem;
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
