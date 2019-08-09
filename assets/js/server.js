const express = require("express");
const path = require("path");

let app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var connection = require("./connection.js");
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  