var path = require('path');
var friendsData = require("../data/friends.js");

module.exports = function (app){
	//showing friends
	app.get('/api/friends', function (req, res){
		res.json(friendsData);
	});
	
	app.post("/api/friends", function(req, res) {
 	  var newscores = res.body.scores;
    console.log(newscores);
         //showing friends scores 
    matchedScores =[];
    friendsData.forEach(function(friend){
      for (var i = 0; i < friend.scores.length; i++) {
        console.log("scores = " + friend.scores[i])
      }
        console.log("friend =" + friend.name)
        console.log("--------------------")
        });
  

  });
 };

  //     };           

  //       console.log(matchedScores);
  //     // // pulling the lowest one 
  //     //   var match = Math.min.apply(null, matchedScores);
  //     //   console.log(match);
  //    });
  
 	// });	 

// };