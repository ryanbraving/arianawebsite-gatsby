import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import RTL from "./RTL";
import purple from "@material-ui/core/colors/purple";
import styled from "styled-components";
import { styles, SubscribeButton } from "../utils";
import firebase from "../firebase/FirebaseConfigs";
import SendVerificationEmail from "../aws/AWS-SendVerificationEmail";

const db = firebase.firestore();
// const colorPick = yellow[800];
const colorPick = styles.colors.mainYellow;
const stylesMaterialui = theme => ({
  container: {
    display: "block"
    // flexWrap: "wrap"
  },
  textField: {
    marginTop: "1.5rem",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
    // width: 600
  },
  root: {
    flexGrow: 1
  },
  cssLabel: {
    "&$cssFocused": {
      color: colorPick
    }
  },
  cssFocused: {},

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: colorPick
    }
  },
  notchedOutline: {},
  margin: {
    margin: theme.spacing.unit
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700]
    }
  }
});

const theme = createMuiTheme({
  direction: "rtl" // Both here and <body dir="rtl">
});

class OutlinedTextFields extends React.Component {
  state = {
    name: "",
    email: "",
    thankName: "",
    hideSubscribe: true
  };

  handleChange = arg => event => {
    this.setState({
      [arg]: event.target.value
    });
  };

  addEmail = e => {
    e.preventDefault();
    const dbName = this.state.name;
    const dbEmail = this.state.email;
    this.setState({
      thankName: this.state.name,
      name: "",
      email: "",
      hideSubscribe: false
    });

    const timeNow = firebase.firestore.FieldValue.serverTimestamp();
    var refDoc = db.collection("unverifiedUsersFR").doc(dbEmail.toLowerCase());
    refDoc
      .update({
        name: dbName,
        updatedAt: timeNow
      })
      .then(function() {
        // console.log("Document successfully updated!")
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        // console.error("Error updating document: ", error);
        refDoc
          .set({
            docId: refDoc.id,
            name: dbName,
            // email: this.state.dbEmail.toLowerCase(),
            createdAt: timeNow
            // updatedAt: timeNow,
          })
          .then(function() {
            // console.log("Document successfully set!");
          });
      });
    this.sendEmail(dbName, dbEmail);
  };

  sendEmail = (name, email) => {
    SendVerificationEmail(email);
  };

  render() {
    const { classes } = this.props;

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
                      focused: classes.cssFocused
                    }
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline
                    }
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
                      focused: classes.cssFocused
                    }
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
              </div>
            </MuiThemeProvider>
          </RTL>

          <SubscribeButton
            type="submit"
            // className="subscribeBtn"
            style={{
              margin: "2rem auto",
              fontFamily: "Vazir",
              fontSize: "1.5rem",
              letterSpacing: "0.1rem"
            }}
          >
            اشتراک
          </SubscribeButton>

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
          Thanks <span className="thanks-name">{this.state.thankName}</span> for
          subscribing. <br /> An email has been sent to your mailbox.
          <br />
          Please verify the email to complete the process.
        </h1>
      </FormWrapper>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(stylesMaterialui)(OutlinedTextFields);

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
`;
