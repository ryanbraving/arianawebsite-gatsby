import React, { Component } from "react";
import styled from "styled-components";
import ContextConsumer from "../../Context";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  customWidth: {
    maxWidth: 100
  },
  lightTooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    maxWidth: 100
  },
  htmlTooltip: {
    marginTop: "20px",
    // marginLeft: "7px",
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 1)",
    maxWidth: 330,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    "& b": {
      fontWeight: theme.typography.fontWeightMedium
    }
  }
});

class Language extends Component {
  state = {
    open: false
  };

  handleTooltipClose = () => {
    this.setState({ open: false });
  };

  handleTooltipOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    // const longText = `Change to Farsi`;
    const text = (
      <React.Fragment>
        <Typography color="inherit">
          You are in{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>English</span>{" "}
          site now.
        </Typography>
        <Typography color="inherit">
          By clicking here you will be directed to{" "}
          <span style={{ color: "blue", fontWeight: "bold" }}>Farsi</span> site.
        </Typography>
        ---------------------------------------------------------------------------
        <Typography>
          شما در حال حاضر در سایت{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>انگلیسی</span>{" "}
          هستید
        </Typography>
        <Typography>
          با کلیک در اینجا به سایت{" "}
          <span style={{ color: "blue", fontWeight: "bold" }}>فارسی</span> منتقل
          می شوید
        </Typography>
        {/* <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
        {"It's very engaging. Right?"} */}
        {/* <span className={classes.arrow} ref={this.handleArrowRef} /> */}
      </React.Fragment>
    );

    return (
      <ContextConsumer>
        {({ isFarsi, handleLanguage, btnVisible }) => (
          <Tooltip
            classes={{ tooltip: classes.htmlTooltip }}
            title={text}
            placement="bottom"
            onClose={this.handleTooltipClose}
            onOpen={this.handleTooltipOpen}
            open={this.state.open}
            // title="Add"
          >
            <LanguageWrapper
              visible={btnVisible}
              isFarsi={isFarsi}
              onClick={() => {
                handleLanguage();
              }}
            >
              {isFarsi ? "English" : "فارسی"}
            </LanguageWrapper>
          </Tooltip>
        )}
      </ContextConsumer>
    );
  }
}
Language.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Language);

const LanguageWrapper = styled.h3`
  color: ${props => (props.isFarsi ? "blue" : "green")};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
`;
