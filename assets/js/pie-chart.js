src="https://www.gstatic.com/charts/loader.js"
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Spending', 'Amount'],
    ['Rent',     11],
    ['Car',      2],
    ['Miscellaneous',  2],
    ['Spending', 2],
    ['Savings',    7]
  ]);

  var options = {
    title: 'My Monthly Spending'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}