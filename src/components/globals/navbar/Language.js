import React from "react";
import styled from "styled-components";
import ContextConsumer from "../../Context";

export default function Language() {
  return (
    <ContextConsumer>
      {({ isFarsi, handleLanguage, btnVisible }) => (
        <LanguageWrapper
          visible={btnVisible}
          onClick={() => {
            handleLanguage();
          }}
        >
          {isFarsi ? "English" : "Farsi"}
        </LanguageWrapper>
      )}
    </ContextConsumer>
  );
}

const LanguageWrapper = styled.h3`
  color: green;
  visibility: ${props => (props.visible ? "visible" : "hidden")};
`;
