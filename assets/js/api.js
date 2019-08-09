// Alpha Vantage API call


var API = "DHI2B31EUTFJ9PV7";

// This will pull info from a input box
var symbol = "MSFT";

// this will pull info from a button group
var interval = "60min";

// event listener for search button click to make stock info API call
$(document).on('click', '#searchButton', function () {
  $.ajax({
    url: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbol + "&interval=" + interval + "&apikey=" + API,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });
});