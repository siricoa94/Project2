var firebaseConfig = {
  apiKey: "AIzaSyAO6LdnhpYMQ2Z0pNZF76XzwnOuGgDMDZ8",
  authDomain: "bootcamp-project2.firebaseapp.com",
  databaseURL: "https://bootcamp-project2.firebaseio.com",
  projectId: "bootcamp-project2",
  storageBucket: "",
  messagingSenderId: "185623751431",
  appId: "1:185623751431:web:27dc8a38c4302727"
};
firebase.initializeApp(firebaseConfig);
auth = firebase.auth();
var exportObject
$(document).ready(function () {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('user is logged');
      console.log(user.uid);
      $("#user").text(`Welcome, ` + user.displayName);
      $("#log-in").removeClass('log-in')
        .addClass('log-out')
        .html('Logout');
    }
  });
  $(document).on('click', '#userSubmit', function(){
    event.preventDefault();
      console.log($("#userSelection").val());
      console.log($("#userInput").val());
      var command = $("#userSelection").val();
      var number = $("#userInput").val();
      exportObject = {
        command: command,
        number: number
      };
  })
});

// module.exports(exportObject);

