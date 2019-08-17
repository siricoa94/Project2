var db = require("../models/mysql/savings.sql");
const express = require("express");

$(document).ready(function() {
    $.get("/api/savings", function(data) {
        console.log(data)
        for(var i = 0; i < data.length; i++){
            console.log(data[i])
            console.log("hello world")
            $("#all-chars").append(`
            <div class="text-primary">
                <div>${data[i].balance}</div>
            </div>
            `)
        }
    })
})