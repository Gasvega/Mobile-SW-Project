// 파이어베이스
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { initializeFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfXmx9nRiR2ElPp1_zHzEbepvxa1U_9NE",
  authDomain: "mobilesw-f6f9f.firebaseapp.com",
  projectId: "mobilesw-f6f9f",
  storageBucket: "mobilesw-f6f9f.appspot.com",
  messagingSenderId: "846529380981",
  appId: "1:846529380981:web:d379cd279e17402747ae3c",
  measurementId: "G-G7P4X357ND"
  };


  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

  const app = initializeApp(firebaseConfig);

  const db = initializeFirestore(app,{
    experimentalForceLongPolling:true,
})
  
export { firebase,db };