// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions")

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin")
admin.initializeApp()

const TelegramBot = require("node-telegram-bot-api")
const token_subscription = functions.config().bot.token_subscription
const token_inquiry = functions.config().bot.token_inquiry
const token_private_coaching_request = functions.config().bot
  .token_private_coaching_request
const token_group_coaching_request = functions.config().bot
  .token_group_coaching_request
const token_online_course_request = functions.config().bot
  .token_online_course_request
const botSubscription = new TelegramBot(token_subscription, { polling: false })
const botInquiry = new TelegramBot(token_inquiry, { polling: false })
const botPrivateCoachingReq = new TelegramBot(token_private_coaching_request, {
  polling: false,
})
const botGroupCoachingReq = new TelegramBot(token_group_coaching_request, {
  polling: false,
})
const botOnlineCourseReq = new TelegramBot(token_online_course_request, {
  polling: false,
})
const chatid_Ariana = functions.config().bot.chatid_ariana
const chatid_Ryan = functions.config().bot.chatid_ryan

const nodemailer = require("nodemailer")
const cors = require("cors")({ origin: true })
const htmlTemplate = require("./components/email.templates")
const Messages = require("./components/bot.messages")

const credentials = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // These environment variables will be pulled from the .env file
    user: functions.config().gmail.user,
    pass: functions.config().gmail.pass,
  },
}
const CLIENT_ORIGIN =
  //confirmEmail at the end of this address is comming from next function: exports.confirmEmail
  // so if name of next function changed then this address has to be matched with that
  "https://us-central1-ariana-website.cloudfunctions.net/confirmEmail"
const transporter = nodemailer.createTransport(credentials)

exports.privateCoachingRequestFR = functions.firestore
  .document("Request-PrivateCoaching-FR/{docId}")
  .onCreate((snap, context) => {
    const botMessage = Messages.privateCoachingFR(snap)
    try {
      botPrivateCoachingReq.sendMessage(chatid_Ariana, botMessage)
      botPrivateCoachingReq.sendMessage(chatid_Ryan, botMessage)
    } catch (error) {
      console.error("There was an error while sending the email:", error)
    }
    return null
  })

exports.privateCoachingRequestEN = functions.firestore
  .document("Request-PrivateCoaching-EN/{docId}")
  .onCreate((snap, context) => {
    const botMessage = Messages.privateCoachingEN(snap)
    try {
      botPrivateCoachingReq.sendMessage(chatid_Ariana, botMessage)
      botPrivateCoachingReq.sendMessage(chatid_Ryan, botMessage)
    } catch (error) {
      console.error("There was an error while sending the email:", error)
    }
    return null
  })

exports.groupCoachingRequestFR = functions.firestore
  .document("Request-GroupCoaching-FR/{docId}")
  .onCreate((snap, context) => {
    const botMessage = Messages.groupCoachingFR(snap)
    try {
      botGroupCoachingReq.sendMessage(chatid_Ariana, botMessage)
      botGroupCoachingReq.sendMessage(chatid_Ryan, botMessage)
    } catch (error) {
      console.error("There was an error while sending the email:", error)
    }
    return null
  })

exports.groupCoachingRequestEN = functions.firestore
  .document("Request-GroupCoaching-EN/{docId}")
  .onCreate((snap, context) => {
    const botMessage = Messages.groupCoachingEN(snap)
    try {
      botGroupCoachingReq.sendMessage(chatid_Ariana, botMessage)
      botGroupCoachingReq.sendMessage(chatid_Ryan, botMessage)
    } catch (error) {
      console.error("There was an error while sending the email:", error)
    }
    return null
  })

exports.onlineCourseRequestFR = functions.firestore
  .document("Request-OnlineCourses-IdealLife-FR/{docId}")
  .onCreate((snap, context) => {
    const botMessage = Messages.onlineCourseFR(snap)
    try {
      botOnlineCourseReq.sendMessage(chatid_Ariana, botMessage)
      botOnlineCourseReq.sendMessage(chatid_Ryan, botMessage)
    } catch (error) {
      console.error("There was an error while sending the email:", error)
    }
    return null
  })

exports.receivedInquiryFR = functions.firestore
  .document("Contact-FR/{docId}")
  .onCreate((snap, context) => {
    const botMessage = Messages.inquiryFR(snap)
    try {
      botInquiry.sendMessage(chatid_Ariana, botMessage)
      botInquiry.sendMessage(chatid_Ryan, botMessage)
    } catch (error) {
      console.error("There was an error while sending the email:", error)
    }
    return null
  })

exports.receivedInquiryEN = functions.firestore
  .document("Contact-EN/{docId}")
  .onCreate((snap, context) => {
    const botMessage = Messages.inquiryEN(snap)
    try {
      botInquiry.sendMessage(chatid_Ariana, botMessage)
      botInquiry.sendMessage(chatid_Ryan, botMessage)
    } catch (error) {
      console.error("There was an error while sending the email:", error)
    }
    return null
  })

exports.sendEmailEN = functions.firestore
  .document("Unverified-Emails-EN/{docId}")
  .onCreate((snap, context) => {
    const docId = snap.id
    const emailTo = snap.data().email
    // var doc = JSON.stringify(document); //obj is converted to str
    // doc = encodeURIComponent(doc);
    const url = CLIENT_ORIGIN + "?docId=" + docId + "&language=EN"
    let mailOptions = {
      from: '"Ariana Braving" <arianabraving.verifyemail@gmail.com>', // sender address
      to: emailTo, // list of receivers
      subject: "Please Verify Your Email", // Subject line
      html: htmlTemplate.english(url),
      text: `Copy and paste this link: ${url}`,
    }
    // const email = Object.assign({}, content, contacts);
    try {
      transporter.sendMail(mailOptions)
    } catch (error) {
      console.error("There was an error while sending the email:", error)
    }
    return null
  })

exports.sendEmailFR = functions.firestore
  .document("Unverified-Emails-FR/{docId}")
  .onCreate((snap, context) => {
    const docId = snap.id
    const emailTo = snap.data().email
    // var doc = JSON.stringify(document); //obj is converted to str
    // doc = encodeURIComponent(doc);
    const url = CLIENT_ORIGIN + "?docId=" + docId + "&language=FR"
    let mailOptions = {
      from: '"Ariana Braving" <arianabraving.verifyemail@gmail.com>', // sender address
      to: emailTo, // list of receivers
      subject: "لطفا ایمیل خود را تایید کنید", // Subject line
      html: htmlTemplate.farsi(url),
      text: `لطفا این لینک را کپی و در مرورگر خود وارد کنید ${url}`,
    }
    // const email = Object.assign({}, content, contacts);
    try {
      transporter.sendMail(mailOptions)
    } catch (error) {
      console.error("There was an error while sending the email:", error)
    }
    return null
  })

exports.confirmEmail = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if (req.method !== "GET") {
      return res.status(401).json({
        message1: "Only allowed request method is GET",
        message2: "But this request method is: " + req.method,
      })
    }
    // Grab docId parameters from req.query object.
    const { docId, language } = req.query
    // var doc1 = JSON.parse(doc);

    // const millis =
    //   doc1.createdAt._seconds * 1000 + doc1.createdAt._nanoseconds / 1000000;
    // doc1.createdAt = admin.firestore.Timestamp.fromMillis(millis);
    // myDoc.createdAt = new Date(dbTime);
    // const timeNow = admin.firestore.FieldValue.serverTimestamp();
    // const timeNow = new Date();
    const urlRedirect = "https://arianabraving.com/"
    var unverifiedCollection = "Unverified-Emails-EN"
    var verifiedCollection = "Verified-Emails-EN"
    var urlSuccess = "verification.success.EN"
    var urlFailed = "verification.failed.EN"

    if (language === "FR") {
      unverifiedCollection = "Unverified-Emails-FR"
      verifiedCollection = "Verified-Emails-FR"
      urlSuccess = "verification.success.FR"
      urlFailed = "verification.failed.FR"
    }
    var unVerifiedDocRef = admin
      .firestore()
      .collection(unverifiedCollection)
      .doc(docId)

    unVerifiedDocRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          var newDoc = doc.data()
          newDoc.verified = true
          newDoc.verifiedAt = admin.firestore.FieldValue.serverTimestamp()

          admin
            .firestore()
            .collection(verifiedCollection)
            .doc(newDoc.email)
            .set(newDoc)
            .then(function() {
              console.log("Document successfully updated!")
              const { name } = newDoc
              const { country_name, region, city } = newDoc.clientInfo
              var botMessage =
                "Name: " +
                name +
                "\n" +
                "Country: " +
                country_name +
                "\n" +
                "Region: " +
                region +
                "\n" +
                "City: " +
                city
              if (language === "FR") {
                botMessage =
                  "نام: " +
                  name +
                  "\n" +
                  "کشور: " +
                  country_name +
                  "\n" +
                  "ایالت: " +
                  region +
                  "\n" +
                  "شهر: " +
                  city
              }
              // botSubscription.sendMessage(
              //   functions.config().bot.chadid_ryan,
              //   botMessage
              // )
              // botSubscription.sendMessage(
              //   functions.config().bot.chadid_ariana,
              //   botMessage
              // )
              botSubscription.sendMessage(chatid_Ariana, botMessage)
              botSubscription.sendMessage(chatid_Ryan, botMessage)
              return res.redirect(urlRedirect + urlSuccess)
            })
            .catch(function(error) {
              // The document probably doesn't exist.
              console.error("Error setting document: ", error)
              return res.redirect(urlRedirect + urlFailed)
            })
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!")
          return res.redirect(urlRedirect + urlFailed)
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error)
        return res.redirect(urlRedirect + urlFailed)
      })
  })
})

const executeOnce = (change, context, task) => {
  const eventRef = admin
    .firestore()
    .collection("events")
    .doc(context.eventId)

  return admin.firestore().runTransaction(t =>
    t
      .get(eventRef)
      .then(docSnap => (docSnap.exists ? null : task(t)))
      .then(() => t.set(eventRef, { processed: true }))
  )
}

const documentCounter = (collectionName, docName, language) => (
  change,
  context
) =>
  executeOnce(change, context, t => {
    // on create
    if (!change.before.exists && change.after.exists) {
      return t
        .get(
          admin
            .firestore()
            .collection(collectionName)
            .doc(docName)
        )
        .then(docSnap => {
          t.set(docSnap.ref, {
            count: ((docSnap.data() && docSnap.data().count) || 0) + 1,
          })
          // send a telegram message
          var botMessage = ""
          if (language === "FR") {
            botMessage = "تعداد= " + (docSnap.data().count + 1).toString()
          } else {
            botMessage = "Count= " + docSnap.data().count.toString()
          }
          botSubscription.sendMessage(chatid_Ariana, botMessage)
          botSubscription.sendMessage(chatid_Ryan, botMessage)
        })
      // on delete
    } else if (change.before.exists && !change.after.exists) {
      return t
        .get(
          admin
            .firestore()
            .collection(collectionName)
            .doc(docName)
        )
        .then(docSnap => {
          t.set(docSnap.ref, {
            count: docSnap.data().count - 1,
          })
          var botMessage = ""
          if (language === "FR") {
            botMessage = "تعداد= " + (docSnap.data().count - 1).toString()
          } else {
            botMessage = "Count= " + (docSnap.data().count - 2).toString()
          }
          // send a telegram message
          botSubscription.sendMessage(chatid_Ariana, botMessage)
          botSubscription.sendMessage(chatid_Ryan, botMessage)
        })
      //on update
    }
    return null
  })
exports.docCounterEN = functions.firestore
  .document("Verified-Emails-EN/{docId}")
  .onWrite(documentCounter("metadatas", "Counter-Verified-EN", "EN"))

exports.docCounterFR = functions.firestore
  .document("Verified-Emails-FR/{docId}")
  .onWrite(documentCounter("metadatas", "Counter-Verified-FR", "FR"))
