var app = require('express')();
var University = require('../models/UniversityModel');

app.get('/universities', function(req, res) {

  University.find({}, function(err, universities) {
		if(err) throw err;

		res.send(universities);
	});
});

app.get('/university', function(req, res) {
	var id = req.query.universityId;

  University.find({ _id: id }, function(err, university) {
		if(err) throw err;

		res.send(university[0]);
	});
});

app.delete('/university', function(req, res) {
	var bookId = req.query.universityId;

	University.findByIdAndRemove(bookId, function(err, university) {
		if(err) {
			res.send({
				success: false,
				message: "The request was not completed. University with id " + university._id + " is not successfully deleted"
			});
		} else {
			res.send({
				success: true,
				message: "University successfully deleted",
				id: university._id
			});
		}
	});
});

app.post('/university', function(req, res) {
	var universityData = req.body.universityData;
	var university = new University(universityData);
  university.save(function(err, createdBookObject) {
		if(err) {
			res.send({
				success: false,
				message: "University not added"
			});
		} else {
			res.send({
				success: true,
				message: "University successfully added",
        university: createdBookObject
			});
		}
	});
});

app.put('/university', function(req, res) {
	var universityData = req.body.universityData;

  University.findById(universityData.id, function(err, university) {
		if(err) {
			res.send(err);
		} else {
      university.name = universityData.name;
      university.category = universityData.category;
      university.description = universityData.description;
      university.adresse = universityData.adresse;
      university.image_url = universityData.image_url;


      university.save(function(err, university) {
				if(err) {
					res.send(err);
				} else {
					res.send({
						success: true,
						message: "university successfully updated"
					});
				}
			});
		}
	});
});

module.exports = app;
