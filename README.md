AngularJS Highcharts Directive
========

Using the column chart from highcharts library to create a directive for angularjs. Server starts on port 8000

### Running in the browser

    npm start or node server


### Posting data

    dynamic update of chart by posting to http://localhost:8001/chart  I typically use the chrome plugin app Advance Rest Client


### Example data object for post

    { "country" : "USA", "locations" : [{ "location": "N. Mel", "onHand": "1444.740", "color": "#e84c3d" }, { "location": "Indiana", "onHand": "4444.740", "color": "#00add5"}] }