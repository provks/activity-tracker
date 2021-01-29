// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

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

module.exports = firebase;