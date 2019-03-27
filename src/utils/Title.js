import React from "react";
import styled from "styled-components";
import { styles } from "../utils";
import ContextConsumer from "../components/Context";

export function Title({ title, message }) {
  return (
    <ContextConsumer>
      {({ isFarsi }) => (
        <TitleWrapper isFarsi={isFarsi}>
          <h3 className="message">{message}</h3>
          <h1 className="title">{title}</h1>
          <div className="underline" />
        </TitleWrapper>
      )}
    </ContextConsumer>
  );
}

Title.defaultProps = {
  message: "our message",
  title: "our title"
};

const TitleWrapper = styled.div`
  text-align: center;
  .message {
    line-height: 3rem;
    /* word-spacing: 0.5rem; */
    font-family: ${props => (props.isFarsi ? "Vazir" : "cursive")};
    /* ${styles.textSlanted}; */
    letter-spacing: ${props => (props.isFarsi ? "0.2rem" : "0.3rem")};
    /* ${styles.letterSpacing({ spacing: "0.3rem" })}; */
    font-size: 2rem;
    color: ${styles.colors.mainYellow};
  }
  .title {
    letter-spacing: ${props => (props.isFarsi ? "0.2rem" : "0.3rem")};
    /* ${styles.letterSpacing({ spacing: "0.3rem" })}; */
    font-size: 2rem;
    text-transform: uppercase;
  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  }
`;
