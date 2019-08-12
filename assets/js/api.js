// event listener for search button click to make stock info API call
$(document).on('click', '#stockSearchButton', function () {
  // Alpha Vantage API call
  event.preventDefault();

  var API = "DHI2B31EUTFJ9PV7";

  // This will pull info from a input box
  var symbol = $("#inputSymbol").val();
  console.log(symbol);


  // this will pull info from a button group
  var interval = $('input[name=intervalSelect]:checked').val();
  console.log(interval);

  var dataPoints = $('input[name=dataPoints]:checked').val();
  console.log(dataPoints);


  $.ajax({

    url: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbol + "&interval=" + interval + "&apikey=" + API,
    method: "GET"
  }).then(function (response) {
    console.log("------------------------------------");
    console.log("AlphaVantage Response Object")
    console.log(response);
    console.log("------------------------------------");

  });
});


// New York Times API call and response manipulation
function updatePage(NYTData) {
  // Set Limit of articles to display
  var numArticles = 3;

  // Loop through and build elements for the defined number of articles
  for (var i = 0; i < numArticles; i++) {
    // Get specific article info for current index
    var article = NYTData.results[i];

    // Create the  list group to contain the articles and add the article content for each
    var $articleList = $("<ul>");
    $articleList.addClass("list-group");

    // Add the newly created element to the DOM
    $("#article-section").append($articleList);

    // If the article has a headline, log and append to $articleList
    var headline = article.title;
    var $articleListItem = $("<li class='list-group-item articleHeadline m-1'>");
    if (headline) {
      $articleListItem.append(
        "<strong> " +
        headline +
        "</strong>"
      );
    }
    // If the article has a byline, log and append to $articleList
    var byline = article.byline;

    if (byline) {
      $articleListItem.append("<h5>" + byline + "</h5>");
    }

    // Log section, and append to document if exists
    var section = article.section;
    if (section) {
      $articleListItem.append("<h5>Section: " + section + "</h5>");
    }

    // Log published date, and append to document if exists
    var pubDate = article.published_date;
    if (pubDate) {
      $articleListItem.append("<h5>" + pubDate + "</h5>");
    }

    // Append and log url
    $articleListItem.append("<a href='" + article.url + "'>" + article.url + "</a>");

    // Append the article
    $articleList.append($articleListItem);
  }
}

// Function to empty out the articles
function clear() {
  $("#article-section").empty();
}

// AJAX CALL
// ==========================================================

// .on("click") function associated with the Search Button
$(document).ready(function () {
  
  // Empty the region associated with the articles
  clear();


  // This is for dev purposes only. Should be removed when data has been formatted to page.
  // (so we don't keep making an API call every time we refresh)
  $.getJSON("https://api.myjson.com/bins/pic7v", function (data) {
    console.log("------------------------------------");
    console.log("THIS RESPONSE IS FROM A MYJSON SITE. NOT A REAL AJAX CALL")
    console.log("REMOVE BEFORE FINAL DEPLOYMENT")
    console.log(data);
    console.log("------------------------------------");
    }).then(updatePage);



  //THIS IS THE AJAX CALL THE FINAL PRODUCT WILL USE 
  // Make the AJAX request to the API - GETs the JSON data at the queryURL.
  // The data then gets passed as an argument to the updatePage function
  // var queryURL = "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=DK2EnCjcfrg3Zv1nG8Ym1eCuJQJZa6xe";
  //The possible section value are: arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, and world.
  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(updatePage);
});