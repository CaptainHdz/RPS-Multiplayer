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

  const rockBtn = $(".rock-btn");
  const paperBtn = $(".paper-btn");
  const scissorBtn = $(".scissor-btn");



  rockBtn.on("click", function() {

let rock = rockBtn.val().trim();

console.log(rock)

database.ref().push(rock);

  });

  paperBtn.on("click", function() {

let paper = paperBtn.val().trim();

console.log(paper);

database.ref().push(paper);
  });

  scissorBtn.on("click", function() {

let scissor = scissorBtn.val().trim();

console.log(scissor);

database.ref().push(scissor);
  });


  // Not exacty sure what I'm doing but I believe it has to do with the users connection
const connectionRef = database.ref("/connections");

let connectionStatus = database.ref(".info/connected");

console.log(connectionStatus);


connectionStatus.on("val", function(snap) {

  if (snap.val()) {

let connection = connectionRef.push(true);

connection.onDisconnect().remove();
  }



});

// Have to successfully add 2 user presence/ online/offline status
// Provide each user with R P S choice buttons

// Push each user input to the database 
// Compare user input with the other user 
// Determine if win, lose or tie
// Add a win loss tracker for each user