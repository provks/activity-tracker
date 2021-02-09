// render sign in page
module.exports.tasks = function(req, res) {
    return res.render("tasks", {
        title: "Trackit - Tasks"
    });
}