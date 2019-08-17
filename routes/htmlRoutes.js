var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/html/index.html"));
    });
     app.get("/open-page", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/html/open-page.html"));
    });
    app.get("/api/all", function (req, res) {
        // res.sendFile(path.join(__dirname, "view.html"));
        res.sendFile(path.join(__dirname, "../models/newTable.js"));
        
    });
};
