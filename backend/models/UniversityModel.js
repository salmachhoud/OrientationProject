'use strict';

var mongoose = require('mongoose');

var UniversityModel = function() {
	var universitySchema = mongoose.Schema({
    name:{
      type: String,
      required: true
    },
    category:{
      type: String,
      required: true

    },
    description:{
      type: String,
      required: true
    },
    adresse:{
      type: String,
      minlength:1
    },

    image_url:{
      type: String
    }
	});

	return mongoose.model('University', universitySchema);
}


module.exports = new UniversityModel();
