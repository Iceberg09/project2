var db = require("../../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
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

var connection = require("../config/connection.js");

// Chirpy Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM chirps";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a chirp
  app.post("/api/new", function(req, res) {
    console.log("Chirp Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO chirps (author, body, created_at) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
      if (err) throw err;
      console.log("Chirp Successfully Saved!");
      res.end();
    });
  });
};