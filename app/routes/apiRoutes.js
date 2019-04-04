var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/cars/:make", function (req, res) {
    db.cars.findAll({
      where: {
        make: req.params.make
      }
    }).then(function (dbModels) {
      res.json(dbModels);
    });
  });

  app.get("/api/cars/:model", function (req, res) {
    db.cars.findAll({
      where: {
        model: req.params.model
      }
    }).then(function (dbModels) {
      res.json(dbModels);
    });
  });

  app.get("/api/reviews/:lp", function (req, res) {
    db.reviews.findAll({
      where: {
        license_plate: req.params.lp
      }
    }).then(function (dbReviews) {
      res.json(dbReviews);
    });
  });

  app.get("/api/users/:email/:password", function (req, res) {
    db.user.findAll({
      where: {
        email: req.params.email,
        password: req.params.password
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users", function(req, res) {
    db.user.create({
      email: req.body.email,
      password: req.body.password,
      user_acces: req.body.userAccess
    }).then(function(dbUser) {
      res.json(dbUser);
    }).catch(function(err) {
      res.json(err);
    })
  })

  //New Review API
  app.post("/api/newreviews", function(req, res) {
    db.review.create({
      name: req.body.name,
      make: req.body.make,
      model: req.body.model,
      color: req.body.color,
      license_plate: req.body.license_plate,
      rating: req.body.rating,
      comment: req.body.comment,
      date_time: req.body.date_time,
      location: req.body.location
    }).then(function(dbReview) {
      res.json(dbReview);
    }).catch(function(err) {
      res.json(err);
    });
  });

  //Delete User API
  app.delete("/api/users/:email", function(req, res) {
    db.user.destroy({
      where: {
        email: req.params.email
      }
    }).then(function() {
      res.end();
    })
  })
};
