$(document).ready(function () {

  // Firebase config object
  // This is provided by firebase
  const config = {
    apiKey: "AIzaSyAO6LdnhpYMQ2Z0pNZF76XzwnOuGgDMDZ8",
    authDomain: "bootcamp-project2.firebaseapp.com",
    databaseURL: "https://bootcamp-project2.firebaseio.com",
    projectId: "bootcamp-project2",
    storageBucket: "",
    messagingSenderId: "185623751431",
    appId: "1:185623751431:web:27dc8a38c4302727"
  };
  // INITIALIZE FIREBASE AUTH
  firebase.initializeApp(config);
  console.log(firebase);
  // choosing Google Auth Provider to use in firebase auth settings
  // assigning white listed domains where it is allowed (ex: localhost)
  const provider = new firebase.auth.GoogleAuthProvider();
  const auth = firebase.auth();

  // Login Button click event listener and associated 'login' function
  // When log-in is clicked, it changes the button's associated data to 'log-out' stuff
  $(document).on('click', '#login', function () {
    login(provider, isLoggedIn);
    $(this).removeClass('log-in')
      .removeID('login')
      .addClass('log-out')
      .addID('logout')
      .html('Logout');
  });

  // Logout Button listener and function
  $(document).on('click', '.log-out', function () {
    auth.signOut().then(() => {
      $(this).removeClass('log-out')
        .addClass('log-in')
        .html('Login With Google');
      isLoggedOut();
    }).catch((error) => {
      if (error) throw error
    });
  });

  // Using an arrow function to handle the firebase auth function
  const login = (provider, isLoggedIn) => {
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
      // tells firebase to make the user to authenticate using the selected providers (GoogleAuth in this case)

      auth.signInWithPopup(provider).then((result) => {
        // the promise function then returns an object of the user's info
        // (ex: email, name, gmail avatar img)
        // google handles all password security/encryption 
        const user = result.user;
        console.log(user)
        // runs a 'isLoggedIn' function if authentication is successful
        isLoggedIn(user);

      }).catch((error) => {
        // If google returns an error, this code logs those errors for reference
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

  // Functions that handle what happens after a user logs in or out
  const isLoggedIn = user => {
    //DO SOMETHING
    
    $("#user").text("User: " + user.displayName)



  }

  const isLoggedOut = () => {
    //DO SOMETHING
    $("#user").empty()
  }

});