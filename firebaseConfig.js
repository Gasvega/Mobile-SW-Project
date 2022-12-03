import { initializeFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
//import firebase from "firebase/compat/app"
//import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB-S9sN95hKMrVhjikoHHXWWAg4tm1vPYA",
  authDomain: "mobile-sw-1d458.firebaseapp.com",
  projectId: "mobile-sw-1d458",
  storageBucket: "mobile-sw-1d458.appspot.com",
  messagingSenderId: "870506075409",
  appId: "1:870506075409:web:86ae1c29a8e85f6e8928b0",
  measurementId: "G-222RRQF8RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

//const firestore = firebase.firestore();

export { db }
