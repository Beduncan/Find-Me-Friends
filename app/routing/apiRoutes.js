var path = require('path');
var friendsData = require("../data/friends.js");

module.exports = function (app){
	//showing friends
	app.get('/api/friends', function (req, res){
		res.json(friendsData);
	});
	
	app.post("/api/friends", function(req, res) {
 		//showing user
    var newFriend = req.body
   		console.log(newFriend);
    var difference = 40;
 		var matchName = '';
 		var matchPhoto = '';
       	// showing friends scores 
    friendsData.forEach(function(friend){
      matchedScores =[];
      var totalDiff = 50;
      console.log(friend);          
      var Q1 = friend.q1 - newFriend.q1;
        console.log(Q1);
      var Q2 = friend.q2 - newFriend.q2;
        console.log(Q2);
      var Q3 = friend.q3 - newFriend.q3;
        console.log(Q3);
      var Q4 = friend.q4 - newFriend.q4;
        console.log(Q4);     
      var Q5 = friend.q5 - newFriend.q5;
        console.log(Q5);
      var Q6 = friend.q6 - newFriend.q6;
        console.log(Q6);                                 
      var Q7 = friend.q7 - newFriend.q7;
        console.log(Q7);    
      var Q8 = friend.q8 - newFriend.q8;
        console.log(Q8);    
      var Q9 = friend.q9 - newFriend.q9;
        console.log(Q9);
      var Q10 = friend.q10 - newFriend.q10;
        console.log(Q10);
      var Q11 = friend.q11 - newFriend.q11;
        console.log(Q11);                    
        var answer = Q1 + Q2 + Q3 + Q4 + Q5 + Q6 + Q7 + Q8 + Q9 + Q10 + Q11;
        console.log("answer = " + answer);  
    });


 	});	 

};