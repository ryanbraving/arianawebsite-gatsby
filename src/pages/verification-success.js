import React, { Component } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { styles } from "../utils";

export default class verificationSuccess extends Component {
  render() {
    return (
      <Layout>
        <TemplateWrapper>
          <h1 className="text">Subscription has been confirmed</h1>
          <h2 className="text">Thank you</h2>
          <h2 className="text">Ariana Braving</h2>
        </TemplateWrapper>
      </Layout>
    );
  }
}

const TemplateWrapper = styled.div`
  color: ${styles.colors.mainGrey};
  padding-top: 150px;
  min-height: calc(100vh - 213.17px);
  text-align: center;
  h1 {
    color: green;
    padding-bottom: 50px;
  }
  h2 {
    padding-bottom: 20px;
  }
`;
