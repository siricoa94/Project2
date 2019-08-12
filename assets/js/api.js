console.log("API script read")

// event listener for search button click to make stock info API call
$(document).on('click', '#stockSearchButton', function () {
  // Alpha Vantage API call
  event.preventDefault();
 
  var API = "DHI2B31EUTFJ9PV7";

  // This will pull info from a input box
  var symbol = $( "#inputSymbol" ).val();
  console.log(symbol);
  // this will pull info from a button group
  var interval = $('input[name=intervalSelect]:checked').val();
  console.log(interval);

  $.ajax({

    url: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbol + "&interval=" + interval + "&apikey=" + API,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    

  });
});