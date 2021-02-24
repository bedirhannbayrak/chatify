import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyDWR4imexwqHMJUvriop5zm0vQcycujpIQ",
  authDomain: "chat-9ec7e.firebaseapp.com",
  databaseURL: "https://chat-9ec7e-default-rtdb.firebaseio.com",
  projectId: "chat-9ec7e",
  storageBucket: "chat-9ec7e.appspot.com",
  messagingSenderId: "314457149017",
  appId: "1:314457149017:web:e2911667d5785e459cab48",
  measurementId: "G-MQHW0Y19W2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;