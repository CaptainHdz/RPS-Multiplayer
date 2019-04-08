// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC1bA53jI76RxxNMXltYt_QCcDQ2aJWXTA",
    authDomain: "rock-paper-scissors-proj-af714.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-proj-af714.firebaseio.com",
    projectId: "rock-paper-scissors-proj-af714",
    storageBucket: "rock-paper-scissors-proj-af714.appspot.com",
    messagingSenderId: "75169805548"
  };
  firebase.initializeApp(config);

  let database = firebase.database();