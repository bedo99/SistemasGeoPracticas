// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCeahs8xF5Kl8m5rv6f20PubtKtTkKgILc",
    authDomain: "espia-do.firebaseapp.com",
    databaseURL: "https://espia-do.firebaseio.com",
    projectId: "espia-do",
    storageBucket: "espia-do.appspot.com",
    messagingSenderId: "202752331405",
    appId: "1:202752331405:web:db903ebf4cc7f684c7dcc4"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();