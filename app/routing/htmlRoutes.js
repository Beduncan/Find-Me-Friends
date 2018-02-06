var path = require('path');
//routing
module.exports = function (app) {
//route to survey 
	app.get("/survey", function(req, res) {
  	  res.sendFile(path.join(__dirname, "/../public/servey.html"));
	});
	//route to home page
	app.use( function(req, res) {
  	  	res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
}	