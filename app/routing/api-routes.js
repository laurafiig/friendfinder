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
     
      //make variables
      var scoreArray = []
      var score = 0
      //loop thru array
      for (var i=0; i<friendData.length; i++) {
      //reset from last loop
      score = 0        
      //calculate delta points and push to new array
        for (var j=0; j<friendData[i].scores.length; j++) {
          score += Math.abs(res.scores[j]-friendData[i].scores[j]);
        }//for j
      scoreArray.push(score);
      }//for i        
      //find position of highest value in new array
      var matchLoc =scoreArray.indexOf(Math.min.apply(Math, scoreArray))
      //select friend at that position
      var match = friendData[matchLoc]
      alert(match.name)
      //add new person to array
      friendData.push(res.body);
      //send info back to html for use in modal
      res.json(match);
    
  });

};


