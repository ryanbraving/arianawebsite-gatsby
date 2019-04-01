import React, { Component } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { styles } from "../utils";
import ContextConsumer from "../components/Context";

export default class verificationFailedFR extends Component {
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
              <h1 className="text">مشکلی در مراحل اشتراک شما وجود دارد!</h1>
              <h2 className="text">
                برای حل مشکل لطفا توسط این ایمیل با ادمین تماس بگیرید:{" "}
                <span style={{ color: "black" }}>info@ArianaBraving.com</span>
              </h2>
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
  .text {
    direction: rtl;
  }
`;
