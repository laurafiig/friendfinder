// npm packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express server

var app = express();
// initial port
var PORT = process.env.PORT || 8080;

// BodyParser for our server to interpret data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//points our server to route files
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

// starts our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
