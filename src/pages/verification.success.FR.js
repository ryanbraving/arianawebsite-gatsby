import React, { Component } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { styles } from "../utils";
import ContextConsumer from "../components/Context";

export default class verificationSuccessFR extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.click();
  }
  render() {
    return (
      <ContextConsumer>
        {({ setFarsi, setLanguageInvisible }) => (
          <Layout>
            <TemplateWrapper
              ref={this.myRef}
              onClick={() => {
                setFarsi();
                setLanguageInvisible();
              }}
            >
              <h1 className="text">اشتراک شما با موفقیت انجام شد.</h1>
              <h2 className="text">با احترام</h2>
              <h2 className="text">آریانا بریوینگ</h2>
            </TemplateWrapper>
          </Layout>
        )}
      </ContextConsumer>
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
  .text {
    direction: rtl;
  }
`;
