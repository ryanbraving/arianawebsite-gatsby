// import AWS from 'npm:aws-sdk'
var AWS = require("aws-sdk/dist/aws-sdk-react-native");

const ddb = new AWS.DynamoDB({
  apiVersion: "2019-09-01",
  accessKeyId: process.env.GATSBY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.GATSBY_AWS_SECRET_ACCESS_KEY,
  region: "us-east-1",
});

export default ddb;