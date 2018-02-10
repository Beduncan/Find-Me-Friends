var path = require('path');
var friendsData = require("../data/friends.js");
var friendsData2 = require("../data/friends2.js");

module.exports = function (app){
	//showing friends
	app.get('/api/friends', function (req, res){
		res.json(friendsData);
	});
	
	app.post("/api/friends", function(req, res) {
    //GET USERS SCORES WHICH IS WHERE IM HAVING A PROBLEM BECAUSE IT IS RETURN LIKE THIS 'SCORES[]'
    //AND IT WONT LET ME USE THE DATA INIDE ARRAY 
    //grap data in arry 
    // for loop to get each anwser seperately 
    // var newscores = req.body.scores;
    // console.log(newscores);
    //showing friends scores
    //subtract friends scores from users scores
    //add all of the diffences 
    //find the lowest number useing  
    //var match = Math.min.apply(null, matchedScores);
    //console.log(match);
    //if the score is quail to a friends score 
    //send that friend to serrvey.html 
    matchedScores =[];
    userscores =[];
    oldguys(); 
    //going thur friends array 
    function oldguys(){  
      friendsData.forEach(function(friend){
        for (var i = 0; i < friend.scores.length; i++) {
          var scores = friend.scores[i];
          matchedScores.push(friend.scores[i])
          console.log("scores = " + scores);
          console.log(scores[0]);      
        }
      });
    };
    //push new friend to friends array       
  });
 };
