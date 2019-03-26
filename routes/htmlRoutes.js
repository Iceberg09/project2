// Dependencies
// =============================================================
var path = require("path");
//var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Login and Home Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // User Dashboard Page
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user-dashboard.html"));
  });

  // Admin Dashboard Page
  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/admin-dashboard.html"));
  });

  // Reports Page
  app.get("/report", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/report-driver.html"));
  });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });
};
