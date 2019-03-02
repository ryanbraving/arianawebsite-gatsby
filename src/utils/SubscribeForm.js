import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import purple from "@material-ui/core/colors/purple";
import styled from "styled-components";
import { styles, SubscribeButton } from "../utils";

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

class OutlinedTextFields extends React.Component {
  state = {
    name: "",
    email: "",
    hideSubscribe: true
  };

  hideSubscribe = () => {
    console.log("hidemeeee");
  };
  handleChange = arg => event => {
    this.setState({
      [arg]: event.target.value
    });
  };

  addEmail = e => {
    e.preventDefault();
    console.log(this.state.name);
    console.log(this.state.email);
    this.setState({
      name: "",
      email: "",
      hideSubscribe: false
    });

    this.hideSubscribe();
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
          <TextField
            id="outlined-name"
            label="Name"
            helperText="Pleae enter your full name."
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
            label="Email"
            helperText="We'll never share your email."
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

          <SubscribeButton
            type="submit"
            className={classNames(classes.margin)}
            style={{ margin: "2rem auto" }}
          >
            Subscribe
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
          Thanks {this.state.name} for subscribing. <br /> An email has been
          sent to your mailbox.
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
    font-size: 1.4rem;
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
`;
