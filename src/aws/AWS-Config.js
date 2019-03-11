// import AWS from 'npm:aws-sdk'
var AWS = require("aws-sdk/dist/aws-sdk-react-native");

const ses = new AWS.SES({
  apiVersion: "2019-03-01",
  accessKeyId: process.env.GATSBY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.GATSBY_AWS_SECRET_ACCESS_KEY,
  region: "us-west-2"
});

export default ses;
