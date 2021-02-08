// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaqO4nhARh9t5H1hwoVJjbMoEqdQ9CdsI",
    authDomain: "trackit-63f95.firebaseapp.com",
    databaseURL: "https://trackit-63f95.firebaseio.com",
    projectId: "trackit-63f95",
    storageBucket: "trackit-63f95.appspot.com",
    messagingSenderId: "173610881840",
    appId: "1:173610881840:web:715b3dc3549e16c70eeef5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();
// Handle click on Sign in with google button
let GooglesignInButton = document.getElementById('google-sign-in');
if (GooglesignInButton) {
    GooglesignInButton.addEventListener('click', signInWithGoogle);
}

function signInWithGoogle(){
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        // /** @type {firebase.auth.OAuthCredential} */
        console.log("Login success");
        
        var credential = result.credential;
        
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        
        // redirect to profile page
        window.location.assign('./profile');
        // // show sign-out button
        // let signOutBtn = document.getElementById('sign-out');
        // signOutBtn.classList.remove('d-none');
        // // hide sign-in button
        // document.getElementById('sign-in').classList.add('d-none');

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
