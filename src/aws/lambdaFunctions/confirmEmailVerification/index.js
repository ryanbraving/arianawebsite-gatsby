//**************Telegram Setup***********
const request = require("request-promise")
const TELE_TOKEN = process.env.Token_SubscibeBot
const URL = `https://api.telegram.org/bot${TELE_TOKEN}/`
const chat_id_ryan = process.env.Chat_id_Ryan
const chat_id_ariana = process.env.Chat_id_Ariana

//**************Email Encription Setup***********
var key = process.env.MY_SECRET_ENCRYPTOR_KEY
var encryptor = require("simple-encryptor")(key)

//**************AWS DynamoDB Setup***********
const AWS = require("aws-sdk")
let documentClient = new AWS.DynamoDB.DocumentClient()

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

let returnFunc = text => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(text),
  }
  return response
}

exports.handler = async (event, context, callback) => {
  // TODO implement
  const { encryptedEmail, languageReq } = event
  //it is used with Lambda Proxy integration
  //with Lambda Proxy integration, info would be availavle in event, otherwise event is null
  // const { email, language } = event.queryStringParameters
  var decryptedEmail = encryptor.decrypt(encryptedEmail)
  var text = ""
  var url_telegramSend = ""
  if (decryptedEmail == null) {
    text = "Error: decrypted email is null!"
    await telegram_promise(text, chat_id_ryan)
    await telegram_promise(text, chat_id_ariana)
    return returnFunc(text)
  } //if
  var TableName = ""
  languageReq == "FR"
    ? (TableName = "ArianaBraving-Email-Subscription-FR")
    : (TableName = "ArianaBraving-Email-Subscription-EN")
  text = decryptedEmail
  var params = {
    TableName: TableName,
    Key: {
      email: text,
    },
  } //params
  // reading back from DB
  let readDB = await documentClient
    .get(params)
    .promise()
    .catch(error => {
      text = "Error in reading DB: " + error
      console.log(text)
    })
  if (readDB == undefined) {
    await telegram_promise(text, chat_id_ryan)
    await telegram_promise(text, chat_id_ariana)
    return returnFunc(text)
  }
  if (Object.keys(readDB).length == 0) {
    text = "Error: email address doesn't exists!"
    console.log(text)
    console.log(readDB)
    await telegram_promise(text, chat_id_ryan)
    await telegram_promise(text, chat_id_ariana)
    return returnFunc(text)
  }
  if (Object.keys(readDB).length > 1) {
    text = "Error: there are more than one email address in DB!"
    console.log(text)
    console.log(readDB)
    await telegram_promise(text, chat_id_ryan)
    await telegram_promise(text, chat_id_ariana)
    return returnFunc(text)
  }
  // console.log("Email address exists. Verify it ...")
  readDB.Item.verified = true
  readDB.Item.verifiedAt = new Date().toISOString()
  text = JSON.stringify(readDB)
  params = {
    TableName: TableName,
    Item: readDB.Item,
  } //params
  //writing into DB
  let writeDB = await documentClient
    .put(params)
    .promise()
    .catch(error => {
      text = "Error in writing in DB: " + error
      console.log(text)
    })
  if (writeDB == undefined) {
    await telegram_promise(text, chat_id_ryan)
    await telegram_promise(text, chat_id_ariana)
    return returnFunc(text)
  }

  languageReq == "FR"
    ? (text = encodeURIComponent(`*تایید شد*\n`))
    : (text = `*VERIFIED*\n`)
  text = text + "---------------------------------------\n"
  const data = readDB.Item
  text =
    text +
    `${encodeURIComponent(data.email)}\n${encodeURIComponent(data.name)}\n${
      data.country_name
    }\n${data.city}`
  await telegram_promise(text, chat_id_ryan)
  await telegram_promise(text, chat_id_ariana)
  context.succeed({
    location:
      languageReq == "FR"
        ? "https://arianabraving.com/verification.success.FR"
        : "https://arianabraving.com/verification.success.EN",
  })
  // context.fail("https://example.com");
  // text = "Lambda function execution successfully done"
  // return returnFunc(text)
} //exports.handler
