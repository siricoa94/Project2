var userID = null;

$(document).ready(function () {

  var firebaseConfig = {
    apiKey: "AIzaSyAO6LdnhpYMQ2Z0pNZF76XzwnOuGgDMDZ8",
    authDomain: "bootcamp-project2.firebaseapp.com",
    databaseURL: "https://bootcamp-project2.firebaseio.com",
    projectId: "bootcamp-project2",
    storageBucket: "",
    messagingSenderId: "185623751431",
    appId: "1:185623751431:web:27dc8a38c4302727"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Choose providers to use in your firebase auth settings and whitelist domains where you allow it. localhost is whitelisted by default.

  const provider = new firebase.auth.GoogleAuthProvider();
  const auth = firebase.auth()

  $(document).on('click', '.log-in', function () {
    event.preventDefault();
    login(provider, isLoggedIn);
    $(this).removeClass('log-in')
      .addClass('log-out')
      .html('Logout');
  });

  $(document).on('click', '.log-out', function () {
    event.preventDefault();
    console.clear();
    auth.signOut().then(() => {
      $(this).removeClass('log-out')
        .addClass('log-in')
        .html('Login');
      isLoggedOut();
    }).catch((error) => {
      if (error) throw error
    });
  });

  const login = (provider, isLoggedIn) => {
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
      auth.signInWithPopup(provider).then((result) => {
        const user = result.user;
        console.log(user)
        isLoggedIn(user);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error) {
          console.log(errorCode)
          console.log(errorMessage)
        }
      });
    })
  }

  const isLoggedIn = user => {
    //DO SOMETHING
    $("#user").text(`Welcome, ` + user.displayName);
    window.location.href = "/open-page";

  }

  const isLoggedOut = () => {
    //DO SOMETHING
    $("#user").html(`Goodbye`);
    
  }
})
