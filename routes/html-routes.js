const db = require("../models");
var router = require("express").Router();
var path = require( 'path');

var isAuthenticated = require("../config/middleware/isAuthenticated");
const { Router } = require("express");


let unpack = (data) => JSON.parse(JSON.stringify(data));

router.get("/", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/owners");
  }
  res.render("signup");
})

router.get("/login", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/owners");
  }
  res.render("login");
});

router.get("/owners", isAuthenticated, function(req, res) {
  db.Owner.findAll({
    include: [db.Horse]
  }).then(dbOwner => {
    // console.log(dbOwner);
    res.render("index", { owners: unpack(dbOwner) })
  })
});

router.get("/owners/:id", (req, res) => {
  db.Owner.findOne({
      where: {
        id: req.params.id
      },
      include: {
          model: db.Horse,
          required: false,
          where: {
              OwnerId: req.params.id
          }
      }
  }).then(response => {
      console.log(unpack(response));
      res.render("owner", { owner: unpack(response)});
  })
})

module.exports = router;