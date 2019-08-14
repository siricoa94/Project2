var path = require("path");
module.exports = function(app) {
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../html/index.html"));
});
app.get("/open-page", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/open-page.html"));
});
}