// Dependencies
// =============================================================
var path = require("path");
//var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {
  // Landing Page Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  // Login Page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  });

  // Create New User Page
  app.get("/createaccount", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/createaccount.html"));
  });

  // User Dashboard Page
  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/dashboard.html"));
  });

  // My Profile Page
  app.get("/myprofile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/myprofile.html"));
  });

  // My Settings Page
  app.get("/settings", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/settings.html"));
  });

  // Reports Page
  app.get("/reports", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/reports.html"));
  });

  // Reviews Page
  app.get("/newreview", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/newreview.html"));
  });

  // Driver of the Month Page
  app.get("/bestdriver", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/bestdriver.html"));
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
    res.sendFile(path.join(__dirname, "../public/html/404.html"));
  });
};
