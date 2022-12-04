// 파이어베이스
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBefQHqQ2bSy-oSng7cXcKwlineW9iDmxA",
  authDomain: "teamproject-b9d12.firebaseapp.com",
  projectId: "teamproject-b9d12",
  storageBucket: "teamproject-b9d12.appspot.com",
  messagingSenderId: "63044519671",
  appId: "1:63044519671:web:620ed6c763ccb62e9835f2"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };