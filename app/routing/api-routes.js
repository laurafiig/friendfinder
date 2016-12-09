// LOAD DATA
var friendData = require("../data/friends.js");

// ROUTING
module.exports = function(app) {
  // when a user visits a link they are shown a JSON of the data in the table
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // when a user submits form data (a JSON object)
  // ...the JSON is pushed to the Javascript array
  app.post("/api/friends", function(req, res) {
     
      friendData.push(req.body);
      res.json(true);
    
  });

};
