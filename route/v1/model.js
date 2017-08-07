var mongoose	= require("mongoose"),
	Schema		= mongoose.Schema;

	//connecting to the MongoDB
	mongoose.connect("mongodb://localhost/model");
	mongoose.Promise = global.Promise;

	//create geolocation schema
	GeoSchema = new Schema({

		type:{type: String, default: "Point"},
		coordinates:{type: [Number], index: "2dsphere"}

	});



	// creating a model schema
	UserSchema	= new Schema({

		name:{ type: String, required:[true, 'Field is required']},
		rank:{ type: String, required: true},
		available:{type: Boolean, default: false},
		geometry: GeoSchema,
		date: {type: Date, default: Date.now}

	});

	// creating the mongoose model and exporting it to be reusable
	module.exports 	= mongoose.model("user", UserSchema);