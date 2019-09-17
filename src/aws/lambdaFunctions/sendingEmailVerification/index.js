//**************Telegram Setup***********
const request = require("request-promise")
const TELE_TOKEN = process.env.Token_SubscibeBot
const URL = `https://api.telegram.org/bot${TELE_TOKEN}/`
const chat_id_ryan = process.env.Chat_id_Ryan
const chat_id_ariana = process.env.Chat_id_Ariana

//**************Nodemailer Setup***********
const nodemailer = require("nodemailer")
const htmlTemplate = require("./components/email.templates")
const credentials = {
  service: "Gmail",
  auth: {
    // These environment variables will be pulled from the .env file
    user: process.env.gmailUser,
    pass: process.env.gmailPass,
  },
}
const transporter = nodemailer.createTransport(credentials)
const emailVerificationAPI =
  "https://mp6a1qehdh.execute-api.us-east-1.amazonaws.com/v1/confirmemail"

//**************Email Encription Setup***********
var key = process.env.MY_SECRET_ENCRYPTOR_KEY
var encryptor = require("simple-encryptor")(key)

//**************Telegram Send Function***********
let telegram_promise = async (text, chat_id) => {
  if (typeof text == "object") text = JSON.stringify(text)
  const url =
    URL + `sendMessage?text=${text}&chat_id=${chat_id}&parse_mode=Markdown`
  var result = await request.get(url)
  // console.log(result.body)
  return result
  // console.log("error:", error) // Print the error if one occurred
  // console.log("statusCode:", response && response.statusCode) // Print the response status code if a response was received
  // console.log("body:", body) // Print the HTML for the Google homepage.
}

exports.handler = async function(event, context, callback) {
  // TODO implement
  for (var i in event.Records) {
    var record = event.Records[i]
    // await telegram_promise(record, chat_id)
    var language = ""
    record.eventSourceARN.includes("ArianaBraving-Email-Subscription-FR")
      ? (language = "FR")
      : (language = "EN")
    var text = "Nothing"
    var oldVerified = false
    var newVerified = false
    if (record.eventName == "MODIFY") {
      oldVerified = record.dynamodb.OldImage.verified.BOOL
      newVerified = record.dynamodb.NewImage.verified.BOOL
      // var outPut = [oldVerified, newVerified]
      // await telegram_promise(outPut, chat_id)
    }
    if (record.eventName == "INSERT" || (oldVerified && !newVerified)) {
      const emailTo = record.dynamodb.NewImage.email.S
      //Encryption and Encode "+" to "%2B"

      // const encrypted = encryptor.encrypt(emailTo).replace(/\+/gi, "%2B")
      const encrypted = encryptor.encrypt(emailTo)
      const encoded = encodeURIComponent(encrypted)
      const url =
        emailVerificationAPI + "?email=" + encoded + "&language=" + language
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.gmailUser,
          pass: process.env.gmailPass,
        },
      })
      let info = await transporter
        .sendMail({
          from: process.env.gmailUser, // sender address
          to: emailTo, // list of receivers
          subject: "Please Verify Your Email", // Subject line
          text: `Copy and paste this link: ${url}`,
          html: htmlTemplate.english(url),
        })
        .catch(error => (text = "Error in sending email: " + error))
      // console.log("Email sent: %s", info.messageId)
      if (info.messageId) {
        language == "FR"
          ? (text = encodeURIComponent(`*عضو جدید تایید نشده*\n`))
          : (text = `*UNVERIFIED ENTRY*\n`)
        text = text + "---------------------------------------\n"
        const data = record.dynamodb.NewImage
        text =
          text +
          `${encodeURIComponent(data.email.S)}\n${encodeURIComponent(
            data.name.S
          )}\n${data.country_name.S}\n${data.city.S}`
        await telegram_promise(text, chat_id_ryan)
        await telegram_promise(text, chat_id_ariana)
      } else {
        await telegram_promise(text, chat_id_ryan)
        await telegram_promise(text, chat_id_ariana)
      }
    } //if
    // else {
    //   text = `An Event happened in DynamoDB but is not an INSERT! Event is: ${record.eventName}.`
    //   await telegram_promise(text, chat_id)
    // } //else
  } //for
  const response = {
    statusCode: 200,
    body: JSON.stringify("Lambda function execution done"),
  }
  return response
}
