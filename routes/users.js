// var express = require("express");
// var router = express.Router();

module.exports = function (app) {
  
  //Register
  app.get("/register", function (req, res) {
    res.render("register");
  });
  
  //Login
  app.get("/login", function (req, res) {
    res.render("login");
  });
  
};