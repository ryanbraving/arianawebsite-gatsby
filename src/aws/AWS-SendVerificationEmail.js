import ses from "./AWS-Config";

function SendVerificationEmail(email) {
  const params = {
    EmailAddress: email /* required */,
    TemplateName: "verifyEmailTamplate" /* required */
    // ConfigurationSetName: 'STRING_VALUE'
  };
  ses.sendCustomVerificationEmail(params, function(err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    // else console.log(data); // successful response
  });
}

export default SendVerificationEmail;
