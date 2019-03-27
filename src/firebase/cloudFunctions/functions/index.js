// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();

const TelegramBot = require("node-telegram-bot-api");
const token = functions.config().bot.token;
const bot = new TelegramBot(token, { polling: false });
// exports.telegramEN = functions.firestore
//   .document("emailSubscriptionEN/{docId}")
//   .onWrite((change, context) => {
//     // Get an object with the current document value.
//     // If the document does not exist, it has been deleted.
//     const document = change.after.exists
//       ? change.after.data()
//       : change.before.data();

//     // Get an object with the previous document value (for update or delete)
//     // const oldDocument = change.before.data();

//     const email = document.docId;
//     const name = document.name;
//     // Listen for any kind of message. There are different kinds of
//     // messages.
//     // bot.on("message", msg => {
//     //   const chatId = msg.chat.id;

//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(functions.config().bot.chatid, email);
//     bot.sendMessage(functions.config().bot.chatid, name);
//     return null;
//   });

const nodemailer = require("nodemailer");
// const cors = require('cors');
const cors = require("cors")({ origin: true });

const credentials = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // These environment variables will be pulled from the .env file
    user: functions.config().gmail.user,
    pass: functions.config().gmail.pass
  }
};
const CLIENT_ORIGIN =
  //confirmEmail at the end of this address is comming from next function: exports.confirmEmail
  // so if name of next function changed then this address has to be matched with that
  "https://us-central1-ariana-website.cloudfunctions.net/confirmEmail";
const transporter = nodemailer.createTransport(credentials);

exports.sendEmail = functions.firestore
  .document("emailSubscriptionEN/{docId}")
  .onCreate((snap, context) => {
    const document = snap.data();
    const emailTo = document.docId;
    const name = document.name;
    let mailOptions = {
      from: '"Ariana Braving" <arianabraving.verifyemail@gmail.com>', // sender address
      // from: "arianabraving.verifyemail@gmail.com",
      to: emailTo, // list of receivers
      subject: "Please Verify Your Email", // Subject line
      // text: "Hello world?", // plain text body
      // html: "<b>Hello world?</b>" // html body
      html: `
      <!DOCTYPE html>
      <html>
        <head>
            <title>Title of the document</title>
            <style>
              .button {
              background-color: #E9831D;
              border: none;
              border-radius: 10px;
              color: white;
              padding: 10px 20px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 18px;
              color: white;
              margin: 10px 2px;
              cursor: pointer;
              }
              .fixLinkColorIssue a {
                color: white;
              }
            </style>
        </head>
        <body>
          
            <p style="text-align: center; font-size: 18px;">Thanks for subscribing to my newsletter.</p>
            <p style="text-align: center; font-size: 18px;">Please confirm your email address.</p>
            <p style="text-align:center; font-size: 18px;">
              Thank you &hearts;
          </p>
          <p style="text-align:center; font-weight:bold; font-size: 18px;">
              Ariana Braving
          </p>
          <p style="text-align: center;"><span class="fixLinkColorIssue"><a href="${CLIENT_ORIGIN}?email=${emailTo}&amp;name=${name}" class="button"> Confirm My Email</a></span></p>
            <p>&nbsp;</p>
            
          
          <p style="text-align: center; font-size: 12px">© 2019 Braving Academy Ltd, All Rights Reserved</p>
          
        </body>
      </html>
    `,
      text: `Copy and paste this link: ${CLIENT_ORIGIN}?email=${emailTo}&name=${name}`
    };
    // const content = "test";
    // const email = Object.assign({}, content, contacts);
    try {
      transporter.sendMail(mailOptions);
      // transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("There was an error while sending the email:", error);
    }
    return null;
  });

// exports.confirmEmail = functions.https.onRequest((req, res) => {
//   // Grab the text parameter.
//   const email = req.query.text;
//   // Push the new message into the Realtime Database using the Firebase Admin SDK.
//   return admin
//     .database()
//     .ref("/messages")
//     .push({ original: email })
//     .then(snapshot => {
//       // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//       // return res.redirect(303, snapshot.ref.toString());
//       return res.redirect(
//         "https://staging.arianabraving.com/verification-success/"
//       );
//     });
// });

exports.confirmEmail = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if (req.method !== "GET") {
      return res.status(401).json({
        message1: "Only allowed request method is GET",
        message2: "But this request method is: " + req.method
      });
    }
    // Grab the name & email parameters from req.query object.
    const name = req.query.name;
    const email = req.query.email;
    const timeNow = admin.firestore.FieldValue.serverTimestamp();
    var docRef = admin
      .firestore()
      .collection("emailSubscriptionEN")
      .doc(email);
    return docRef
      .update({
        verified: true,
        verifiedAt: timeNow
      })
      .then(function() {
        console.log("Document successfully updated!");
        bot.sendMessage(functions.config().bot.chatid, name + " " + email);
        // bot.sendMessage(functions.config().bot.chatid, email);
        return res.redirect(
          "https://staging.arianabraving.com/verification-success/"
        );
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
        return res.redirect(
          "https://staging.arianabraving.com/verification-failed/"
        );
      });
  });
});
