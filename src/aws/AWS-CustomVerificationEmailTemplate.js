import React, { Component } from "react";
import ses from "./AWS-Config";

export default class AwsCustomeVerificationEmailTemplate extends Component {
  awsListTemplatesApi() {
    var params = {
      MaxResults: 10
      // NextToken: 'STRING_VALUE'
    };
    ses.listCustomVerificationEmailTemplates(params, function(err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else console.log(data); // successful response
    });
  }

  awsDeleteTemplateApi() {
    var params = {
      TemplateName: "verifyEmailTamplate" /* required */
    };
    ses.deleteCustomVerificationEmailTemplate(params, function(err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else console.log(data); // successful response
    });
  }

  awsCreateTemplateApi() {
    const params = {
      TemplateName: "verifyEmailTamplate" /* required */,
      FromEmailAddress: "info@arianabraving.com" /* required */,
      TemplateSubject:
        "Ariana Braving - Email Verification Required" /* required */,
      TemplateContent:
        "<p>Hi there,</p><p>Thanks for subscribing in my website. Please click on below link to verify your email address.</p><p>Best regards,</p><p><strong>Ariana Braving</strong></p>",
      SuccessRedirectionURL:
        "https://staging.arianabraving.com/verification-success" /* required */,
      FailureRedirectionURL:
        "https://staging.arianabraving.com/verification-failed" /* required */
    };
    ses.createCustomVerificationEmailTemplate(params, function(err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else console.log(data); // successful response
    });
  }
  awsSendTemplatetoIdentityApi() {
    const params = {
      EmailAddress: "ariana.braving@gmail.com" /* required */,
      TemplateName: "verifyEmailTamplate" /* required */
      // ConfigurationSetName: 'STRING_VALUE'
    };
    ses.sendCustomVerificationEmail(params, function(err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else console.log(data); // successful response
    });
  }

  awsListIidentitiesApi() {
    /* The following example lists the email address identities that have been submitted for verification with Amazon SES: */
    var params = {
      IdentityType: "EmailAddress",
      MaxItems: 123,
      NextToken: ""
    };
    ses.listIdentities(params, function(err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else {
        // console.log(data);           // successful response
        var identityList = data.Identities;
        console.log(identityList);
      }
      /*
      data = {
        Identities: [
          "user@example.com"
        ], 
        NextToken: ""
      }
      */
    });
  }

  awsGetVrificationStatusApi() {
    var params = {
      Identities: ["ryan.braving@gmail.com"]
    };
    ses.getIdentityVerificationAttributes(params, function(err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else {
        //  console.log(data);           // successful response
        console.log(data.VerificationAttributes);
      }
      /*
       data = {
        VerificationAttributes: {
         "example.com": {
           VerificationStatus: "Success", 
           VerificationToken: "EXAMPLE3VYb9EDI2nTOQRi/Tf6MI/6bD6THIGiP1MVY="
          }
        }
       }
       */
    });
  }

  awsListAllEmailStatusApi() {
    var params = {
      IdentityType: "EmailAddress",
      MaxItems: 1000, //must be between 1 to 1000
      NextToken: "" //use for pagination if your number is more than 1000
    };
    ses.listIdentities(params, function(err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else {
        // console.log(data);           // successful response
        var identityList = data.Identities;
        console.log(identityList);

        var params = {
          Identities: identityList
        };
        ses.getIdentityVerificationAttributes(params, function(err, data) {
          if (err) console.log(err, err.stack);
          // an error occurred
          else {
            //  console.log(data);           // successful response
            const emailsObject = data.VerificationAttributes;
            console.log(emailsObject);
            const success = Object.keys(emailsObject).filter(key => {
              return emailsObject[key].VerificationStatus === "Success";
            });
            console.log("---Success:", success.length);
            console.log(success);
            const pending = Object.keys(emailsObject).filter(key => {
              return emailsObject[key].VerificationStatus === "Pending";
            });
            console.log("--Pending", pending.length);
            console.log(pending);
            const failed = Object.keys(emailsObject).filter(key => {
              return emailsObject[key].VerificationStatus === "Failed";
            });
            console.log("--Failed", failed.length);
            console.log(failed);
            const temporaryFailure = Object.keys(emailsObject).filter(key => {
              return (
                emailsObject[key].VerificationStatus === "TemporaryFailure"
              );
            });
            console.log("--TemporaryFailure", temporaryFailure.length);
            console.log(temporaryFailure);
            const notStarted = Object.keys(emailsObject).filter(key => {
              return emailsObject[key].VerificationStatus === "NotStarted";
            });
            console.log("--NotStarted", notStarted.length);
            console.log(notStarted);
          }
        });
      }
    });
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.awsCreateTemplateApi();
          }}
        >
          {" "}
          Create Template
        </button>
        <button
          onClick={() => {
            this.awsListTemplatesApi();
          }}
        >
          {" "}
          List Verification Templates
        </button>
        <button
          onClick={() => {
            this.awsDeleteTemplateApi();
          }}
        >
          {" "}
          Delete Template
        </button>
        <button
          onClick={() => {
            this.awsSendTemplatetoIdentityApi();
          }}
        >
          {" "}
          Send Template to Someone
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            this.awsListIidentitiesApi();
          }}
        >
          {" "}
          List Identities
        </button>
        <button
          onClick={() => {
            this.awsGetVrificationStatusApi();
          }}
        >
          {" "}
          Identity Verification Statue
        </button>
        <button
          onClick={() => {
            this.awsListAllEmailStatusApi();
          }}
        >
          {" "}
          List All Emails Status
        </button>
      </div>
    );
  }
}
