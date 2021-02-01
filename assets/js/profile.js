window.addEventListener("DOMContentLoaded", () => {
     // Your web app's Firebase configuration
     const firebaseConfig = {
        apiKey: "AIzaSyBaqO4nhARh9t5H1hwoVJjbMoEqdQ9CdsI",
        authDomain: "trackit-63f95.firebaseapp.com",
        projectId: "trackit-63f95",
        storageBucket: "trackit-63f95.appspot.com",
        messagingSenderId: "173610881840",
        appId: "1:173610881840:web:715b3dc3549e16c70eeef5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // to get the current user is by setting an observer on the Auth object
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // console.log("User: ", user);
            // User is signed in.
            var user = firebase.auth().currentUser;
            var name, email, photoUrl, emailVerified;
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            console.log("User name", name);
            console.log("User email", email);
            console.log("User photourl", photoUrl);
            console.log("User emailVerified", emailVerified);
        } else {
            // No user is signed in.
            console.log("No user is signed in.");
        }
      });

});
