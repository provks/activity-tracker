// firebase-admin-sdk

// render profile page when user is logged in
module.exports.profile = function(req, res) {
    // try {
    //     db.collection('users').get()
    //     .then((snapshot) => {
    //         console.log(snapshot);
    //     }).catch(error =>{
    //         console.log("Something went wrong!", error);
    //     })
        
    // } catch (error) {
    //     console.log("Error while reading data", error);
    // }
    return res.render("profile", {
        title: "Trackit - Profile"
    });
}

// render sign in page
module.exports.login = function(req, res) {
    return res.render("sign_in", {
        title: "Trackit - Login"
    });
}