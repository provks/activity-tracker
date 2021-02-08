let signOutBtn = document.getElementById('sign-out');
let signInBtn = document.getElementById('sign-in');
// Set an authentication state observer and get user data
// This observer gets called whenever the user's sign-in state changes.
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log("User is signed in", user);

      // show sign-out button
      signOutBtn.classList.remove('d-none');
      // hide sign-in button
      signInBtn.classList.add('d-none');

      // sign Out user
      signOutBtn.addEventListener('click', signOutUser);
      

      // ...
    } else {
        // User is signed out
        console.log('// User is signed out!');
        //   console.log('CheckURL: ', window.location.href);
        // send him to login screen
        if (window.location.pathname != '/users/login') {
            window.location.assign('./login');
        }

    }
  });

function signOutUser(){
    console.log("Inside Sign Out Fucntion!");
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        // show sign-in button
        signInBtn.classList.remove('d-none');
        // hide sign-out button
        signOutBtn.classList.add('d-none');
    }).catch((error) => {
        // An error happened.
    });
}