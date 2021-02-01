module.exports.profile = function(req, res) {
    return res.render("profile", {
        title: "Trackit - Profile"
    });
}


module.exports.login = function(req, res) {
    return res.render("sign_in", {
        title: "Trackit - Login"
    });
}