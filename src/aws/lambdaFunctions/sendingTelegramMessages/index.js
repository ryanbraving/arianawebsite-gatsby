const Messages = require("./components/bot.messages")
//**************Telegram Setup***********
const request = require("request-promise")
var TOKEN = {
  inquiry: process.env.Token_InquiryBot,
  privateCoaching: process.env.Token_PrivateCoachingBot,
  groupCoaching: process.env.Token_GroupCoachingBot,
  onlineCourse: process.env.Token_OnlineCourseBot,
  subscribe: process.env.Token_SubscibeBot,
  error: process.env.Token_ErrorBot,
}
// const TELE_TOKEN = process.env.Token_Inquiry
// const URL = `https://api.telegram.org/bot${TELE_TOKEN}/`
const chat_id_ryan = process.env.Chat_id_Ryan
const chat_id_ariana = process.env.Chat_id_Ariana

//**************Telegram Send Function***********
let telegram_promise = async (token, text, chat_id) => {
  const URL = `https://api.telegram.org/bot${token}/`
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

    if (record.eventName == "INSERT") {
      var text =
        "There is an issue in ArianaBraving_TelegramMessages Lambda function"
      // const data = encodeURIComponent(record.dynamodb.NewImage.Message.S)
      // console.log(data)
      const data = record.dynamodb.NewImage
      var newData = {}
      for (var x in data) {
        newData[x] = { S: encodeURIComponent(data[x]["S"]) }
      }
      if (record.eventSourceARN.includes("PrivateCoaching-FR")) {
        text = Messages.privateCoaching(newData, "FR")
        await telegram_promise(TOKEN.privateCoaching, text, chat_id_ryan)
        await telegram_promise(TOKEN.privateCoaching, text, chat_id_ariana)
      } else if (record.eventSourceARN.includes("PrivateCoaching-EN")) {
        text = Messages.privateCoaching(newData, "EN")
        await telegram_promise(TOKEN.privateCoaching, text, chat_id_ryan)
        await telegram_promise(TOKEN.privateCoaching, text, chat_id_ariana)
      } else if (record.eventSourceARN.includes("GroupCoaching-FR")) {
        text = Messages.groupCoaching(newData, "FR")
        await telegram_promise(TOKEN.groupCoaching, text, chat_id_ryan)
        await telegram_promise(TOKEN.groupCoaching, text, chat_id_ariana)
      } else if (record.eventSourceARN.includes("GroupCoaching-EN")) {
        text = Messages.groupCoaching(newData, "EN")
        await telegram_promise(TOKEN.groupCoaching, text, chat_id_ryan)
        await telegram_promise(TOKEN.groupCoaching, text, chat_id_ariana)
      } else if (record.eventSourceARN.includes("OnlineCourses-IdealLife-FR")) {
        text = Messages.onlineCourse(newData, "FR")
        await telegram_promise(TOKEN.onlineCourse, text, chat_id_ryan)
        await telegram_promise(TOKEN.onlineCourse, text, chat_id_ariana)
      } else if (record.eventSourceARN.includes("Contact-FR")) {
        text = Messages.inquiry(newData, "FR")
        await telegram_promise(TOKEN.inquiry, text, chat_id_ryan)
        await telegram_promise(TOKEN.inquiry, text, chat_id_ariana)
      } else if (record.eventSourceARN.includes("Contact-EN")) {
        text = Messages.inquiry(newData, "EN")
        await telegram_promise(TOKEN.inquiry, text, chat_id_ryan)
        await telegram_promise(TOKEN.inquiry, text, chat_id_ariana)
      } else {
        await telegram_promise(TOKEN.error, text, chat_id_ryan)
        await telegram_promise(TOKEN.error, text, chat_id_ariana)
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
