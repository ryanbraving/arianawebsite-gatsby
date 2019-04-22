// import firebase from "firebase";
import firebase from "firebase/app";

// These imports load individual services into the firebase namespace.
// import "firebase/auth";
import "firebase/firestore";
// require("firebase/firestore");
// global.XMLHttpRequest = require("xhr2");

var config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: "ariana-website.firebaseapp.com",
  databaseURL: "https://ariana-website.firebaseio.com",
  projectId: "ariana-website",
  storageBucket: "ariana-website.appspot.com",
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
// const db = firebase.firestore();

export default firebase;
// export default db;
