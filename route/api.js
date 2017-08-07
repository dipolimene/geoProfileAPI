var express 		= require("express"),
	router			= express.Router(),
	User			= require("../route/v1/model");

//GET method
	router.get("/all", (req,res,next) =>{

	User.find({}).then((users)=>{
		res.send(users);
	});

	/*User.geoNear(

		{type: "Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
		{maxDistance: 100000, spherical:true}

	).then((users)=>{

		res.send(users);

	});*/

 });

//POST method
	router.post("/all", (req,res,next) =>{

	User.create(req.body).then((user)=>{

		res.send(user);

		}).catch(next);
		
	});

//PUT method
	router.put("/all/:id", (req,res,next) =>{

		User.findByIdAndUpdate({_id: req.params.id}, req.body).then(()=>{

			User.findOne({_id: req.params.id}).then((user)=>{

				res.send(user);
			});

		});

	});
 
//DELETE method
	router.delete("/all/:id", (req,res,next) =>{

		User.findByIdAndRemove({_id: req.params.id}).then((user)=>{

			res.send(user);

		});

	});

	module.exports = router;