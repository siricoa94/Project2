// Alpha Vantage API call

var API = "DHI2B31EUTFJ9PV7";
var symbol = "MSFT";
var interval = "60min";
var JSONresponse = $("#jsonresponse");
// event listener for any button click.
//  NEEDS TO BE CHANGED WHEN FRONT END LAYOUT FINALIZED
//  ONLY WORKS WITH open-page.html FILE

$(document).on('click', 'button', function () {
  var API = "DHI2B31EUTFJ9PV7";
  var symbol = "MSFT";
  var interval = "60min";

  $.ajax({
    url: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbol + "&interval=" + interval + "&apikey=" + API,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });
});