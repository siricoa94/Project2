app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("/open-page", function (req, res) {
    res.sendFile(path.join(__dirname, "/open-page.html"));
});