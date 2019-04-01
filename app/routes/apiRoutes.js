var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/cars/:make", function(req, res) {
    db.car.findAll({
      where: {
        make: req.params.make
      }
    }).then(function(dbModels) {
      res.json(dbModels);
    });
  });

  app.get("/api/cars/:model", function(req, res) {
    db.car.findAll({
      where: {
        model: req.params.model
      }
    }).then(function(dbModels) {
      res.json(dbModels);
    });
  });

  app.get("/api/reviews/:lp", function(req, res) {
    db.review.findAll({
      where: {
        license_plate: req.params.lp
      }
    }).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

  app.get("api/users/:email/:password", function(req,res) {
    db.user.findOne({
      where: {
        email: req.params.email,
        password: req.params.password
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};