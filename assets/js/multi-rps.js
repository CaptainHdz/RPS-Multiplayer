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
  });

  paperBtn.on("click", function() {

let paper = paperBtn.val().trim();

console.log(paper);
  });

  scissorBtn.on("click", function() {

let scissor = scissorBtn.val().trim();

console.log(scissor);
  });
