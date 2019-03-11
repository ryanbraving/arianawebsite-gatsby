import React, { Component } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { styles } from "../utils";

export default class verificationSuccess extends Component {
  render() {
    return (
      <Layout>
        <TemplateWrapper>
          <h1 className="text">Subscription has been failed!</h1>
          <h2 className="text">
            In order to assist you please contact admin at:{" "}
            <span style={{ color: "black" }}>info@ArianaBraving.com</span>
          </h2>
          <h2 className="text">Thank you</h2>
          <h2 className="text">Ariana Braving</h2>
        </TemplateWrapper>
      </Layout>
    );
  }
}

const TemplateWrapper = styled.div`
  margin: auto;
  color: ${styles.colors.mainGrey};
  padding-top: 150px;
  width: 75%;
  min-height: calc(100vh - 213.17px);
  text-align: center;
  h1 {
    color: red;
    padding-bottom: 50px;
  }
  h2 {
    padding-bottom: 20px;
  }
`;
