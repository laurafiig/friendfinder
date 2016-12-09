var friendData = [
  {
  "name":"Luke",
  "photo":"luke.jpg",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     2,
     5,
     4,
     4,
     5
   ]
},
{
  "name":"Percy",
  "photo":"luke.jpg",
  "scores":[
     2,
     5,
     2,
     2,
     4,
     3,
     2,
     4,
     3,
     1
   ]
},
{
  "name":"Pixie",
  "photo":"pixie.png",
  "scores":[
     4,
     3,
     4,
     5,
     3,
     5,
     5,
     1,
     4,
     5
   ]
},
{
  "name":"Jennifer",
  "photo":"jennifer.jpg",
  "scores":[
     4,
     1,
     2,
     1,
     5,
     4,
     4,
     3,
     2,
     4
   ]
},
{
  name:"Patty",
  photo:"Patty.jpg",
  scores:[
     3,
     3,
     3,
     3,
     3,
     3,
     3,
     3,
     3,
     3
   ]
}
];

var resSur = {
  name:"ando",
  photo:"#",
  scores:[
     3,
     3,
     3,
     3,
     3,
     3,
     3,
     3,
     3,
     3
   ]
}
     
      //make variables
      var scoreArray = []
      var score = 0
      //loop thru array
      for (var i=0; i<friendData.length; i++) {
      //reset from last loop
      score = 0
      //calculate delta points and push to new array
        for (var j=0; j<friendData[i].scores.length; j++) {
          score += Math.abs(resSur.scores[j]-friendData[i].scores[j]);
        }//for j
        scoreArray.push(score);
        //console.log(scoreArray)
      }//for i        
      //find position of lowest value in new array
      var matchLoc =scoreArray.indexOf(Math.min.apply(Math, scoreArray))
      //select friend at that position
      var match = friendData[matchLoc]
      //console.log(match.name)
      


