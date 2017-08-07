var express = require("express"),		// require express
	bps		= require("body-parser"), 	// require body parser, to process request data
	app		= express(), 				// set up an express app
	api		= require("./route/api");	// require routes from api.js in route folder

// utilizing the body-parser to accept json file 
	app.use(bps.json());

// mount routes
	app.use("/api", api);

// Your error handler or application error handler must be the last endpoint in your list of routes 
	app.use((err, req, res, next) => {
		res.status(422).send({ error: err.message });

	});

// set up port number to listen for request
	app.listen(process.env.port || 4000, () =>{
		console.log("server started...");
	});