var path = require('path');
var friendsData = require("../data/friends.js");

module.exports = function (app){
	
	app.get('/api/friends', function (req, res){
		res.json(friendsData);
	});
	// Create New Characters - takes in JSON input
	app.post("/api/friends", function(req, res) {
 		 var NameMatch ='';
 		 var imageMatch='';
 		 var diff = 0;
 		 

 		 for (var i = 0; i < friendsData.length; i++) {
 		 	console.log(friendsData[i])
 		 }
 		 
 		 var input = req.body;
 		 console.log(input);
 		 for (var a = 0; a < input.length; a++) {
 		 		console.log(input[a]);
 		 		//getting diff for each 
 		 		//diff += Math.abs(friendsData[i].Scores[a] - input[a]);
 		 }
 		 


  		//adding new user
  		 friendsData.push(input);
  		 //sending res
  		 res.json({status: 'OK', NameMatch:NameMatch, imageMatch:imageMatch});
	});
};