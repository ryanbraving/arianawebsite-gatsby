import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
// import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
// import orange from "@material-ui/core/colors/orange";
// import amber from "@material-ui/core/colors/amber";
import purple from "@material-ui/core/colors/purple";
import { styles } from "../utils";
import styled from "styled-components";
import { SubscribeButton } from "../utils";

// const colorPick = yellow[800];
const colorPick = styles.colors.mainYellow;
const stylesMaterialui = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit
    // width: 200
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
    email: ""
  };

  handleChange = name => event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addEmail = e => {
    e.preventDefault();
    console.log("email addeddddddddddd");
  };

  render() {
    const { classes } = this.props;

    return (
      <FormWrapper
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={this.addEmail}
      >
        <Grid container spacing={24}>
          <Grid item lg={4} xs={12}>
            <TextField
              size="small"
              id="outlined-name"
              name="name"
              label="Name"
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
              variant="outlined"
              fullWidth
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
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              id="outlined-email-input"
              name="email"
              label="Email"
              onChange={this.handleChange("email")}
              type="email"
              //   autoComplete="email"
              margin="normal"
              variant="outlined"
              fullWidth
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
          </Grid>
          <Grid item lg={2} xs={12}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              className={classNames(classes.margin, classes.cssRoot)}
            >
              Subscribe
            </Button>
            {/* <SubscribeButton>Subscribe</SubscribeButton> */}
          </Grid>
        </Grid>
      </FormWrapper>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(stylesMaterialui)(OutlinedTextFields);

const FormWrapper = styled.form`
  /* background: red; */
`;

// const SubscribeButton = styled.button`
//   display: block;
//   color: ${styles.colors.mainWhite};
//   background: transparent;
//   padding: 0.5rem 1rem;
//   text-transform: uppercase;
//   font-size: 1.3rem;
//   letter-spacing: 0.2rem;
//   font-weight: 700;
//   ${styles.border({ color: `${styles.colors.mainWhite}` })};
//   ${styles.transition({})};
//   &:hover {
//     background: ${styles.colors.mainWhite};
//     color: ${styles.colors.mainBlack};
//     cursor: pointer;
//   }
// `;
// const SectionButton = styled(SubscribeButton)`
//   color: ${styles.colors.mainBlack};
//   ${styles.border({ color: `${styles.colors.mainBlack}` })};
//   &:hover {
//     background: ${styles.colors.mainBlack};
//     color: ${styles.colors.mainYellow};
//   }
// `;
