import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyBobDxZnZQS8MF_pOki4zKsOF3HZnyC-Kw",
    authDomain: "chatify-5c1be.firebaseapp.com",
    projectId: "chatify-5c1be",
    storageBucket: "chatify-5c1be.appspot.com",
    messagingSenderId: "1034600893137",
    appId: "1:1034600893137:web:5ba1c69c53d98f498f13f0",
    measurementId: "G-LJXX28EPXV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;