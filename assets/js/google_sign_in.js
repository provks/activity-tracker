

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

    function signInWithGoogle(){
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            // /** @type {firebase.auth.OAuthCredential} */
            console.log("Login success");
            window.location.assign('./profile');
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log("User: ",user);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            console.log("Error while loggin in");
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    var provider = new firebase.auth.GoogleAuthProvider();
    document.getElementById('google-sign-in').addEventListener('click', signInWithGoogle);
    
});