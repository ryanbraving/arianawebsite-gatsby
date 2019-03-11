import React, { Component } from "react";
import CustomVerifyEmailTemplate from "../aws/AWS-CustomVerificationEmailTemplate";
export default class aws_AdminPage extends Component {
  render() {
    return (
      <div>
        <h1>Hey Ariana! Please use this page very cautiously</h1>
        <CustomVerifyEmailTemplate />
      </div>
    );
  }
}
