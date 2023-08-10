import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCIdi0ieckKNTo4hbQoEQqsJL1ShUAzdYQ",
    authDomain: "chatchit-edc83.firebaseapp.com",
    projectId: "chatchit-edc83",
    storageBucket: "chatchit-edc83.appspot.com",
    messagingSenderId: "1097421173666",
    appId: "1:1097421173666:web:e219ef7b7abb7ab55178fb",
  })
  .auth();
