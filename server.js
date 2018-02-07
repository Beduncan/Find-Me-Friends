// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//set up express app
var app = express();
var PORT = process.env.PORT || 3000;

// set up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//router
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//starts the server to began listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});