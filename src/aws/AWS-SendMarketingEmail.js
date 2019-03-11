import React, { Component } from "react";
import ses from "./AWS-Config";

export default class AwsSendEmail extends Component {
  sendTestEmail() {
    console.log("--> sendEmail() firing");
    let charset = "UTF-8";
    let sesVerifiedEmail = "Ariana Braving <info@arianabraving.com>";
    let replyToAddresses = ["Ariana Braving <info@arianabraving.com>"];
    let toAddresses = ["Ryan Braving <ryan.braving@gmail.com>"]; //only verified addresses
    // let bccAddresses = [ 'Henry Example <henry@example.com>',
    //                      'Sally Example <sally@example.com>' ];
    let subject = "Test email from AWS SES";
    let message =
      "If you are reading this message then the email  system works! Brilliant!";
    let emailParams = {
      Destination: {
        ToAddresses: toAddresses
        // BccAddresses: bccAddresses
      },
      Message: {
        Body: {
          Text: {
            Data: message,
            Charset: charset
          }
        },
        Subject: {
          Data: subject,
          Charset: charset
        }
      },
      ReplyToAddresses: replyToAddresses,
      Source: sesVerifiedEmail // must be SES verified email
    };
    this.sendAwsSesEmail(emailParams);
  }
  sendAwsSesEmail(emailParams) {
    console.log("--> sendAwsSesEmail() firing");
    // let flashMessages = this.get('flashMessages');
    ses.sendEmail(emailParams, function(error, data) {
      if (error) {
        console.log(`sendAwsSesEmail() error: ${error.message}`);
      } else {
        console.log(
          `sendAwsSesEmail() successfully sent email with ID: ${data.MessageId}`
        );
      }
    });
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.sendTestEmail();
          }}
        >
          {" "}
          Send Email!
        </button>
      </div>
    );
  }
}
