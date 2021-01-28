module.exports.home = function(req, res) {
    return res.status(200).send("<h1>Home Page from Controller</h1>");
}