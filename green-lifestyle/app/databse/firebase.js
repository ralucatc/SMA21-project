import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnggiv2BTme5cbTY0fHAE_b4L_wxB0FiA",
  authDomain: "green-99c60.firebaseapp.com",
  projectId: "green-99c60",
  storageBucket: "green-99c60.appspot.com",
  messagingSenderId: "643159547674",
  appId: "1:643159547674:web:af7843b6c74cdfcc85d6a3",
  measurementId: "G-QZT58QLTMZ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
