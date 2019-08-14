

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
  $( document ).ready(function() {
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
  });