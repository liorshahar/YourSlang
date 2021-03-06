$(window).on("load", function() {
  google.charts.load("current", { packages: ["bar"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var jsonData = $.ajax({
      url: "http://localhost:3004/getTvShowRoutes",
      dataType: "json", // type of data we're expecting from server
      async: false // make true to avoid waiting for the request to be complete
    });

    var data = google.visualization.arrayToDataTable(jsonData.responseJSON);

    var options = {
      chart: {
        title: "כמות ציוצים לתוכנית"
      },
      bars: "horizontal" // Required for Material Bar Charts.
    };
    var chart = new google.charts.Bar(
      document.getElementById("barchart_material")
    );
    chart.draw(data, google.charts.Bar.convertOptions(options));
  }

  $(".col-lg-3.tvShow").click(function(event) {
    let parentDiv = event.target.parentNode;
    let tvShowName = parentDiv.children[1].innerText;
    console.log("Tv Show Name: " + tvShowName);
    drawChartByName(tvShowName);
  });
});

function drawChartByName(name) {
  var jsonData = $.ajax({
    url: "http://localhost:3004/getTvShowByNameRoutes/" + name,
    dataType: "json", // type of data we're expecting from server
    async: false // make true to avoid waiting for the request to be complete
  });
  console.log(jsonData.responseJSON);
  var data = google.visualization.arrayToDataTable(jsonData.responseJSON);

  var options = {
    chart: {
      title: "כמות ציוצים לתוכנית"
    },
    bars: "horizontal" // Required for Material Bar Charts.
  };
  var chart = new google.charts.Bar(
    document.getElementById("barchart_material")
  );
  chart.draw(data, google.charts.Bar.convertOptions(options));
}
