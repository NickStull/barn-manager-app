const db = require("../models");
var router = require("express").Router();
var path = require( 'path');
var isAuthenticated = require("../config/middleware/isAuthenticated");
const { Router } = require("express");

let unpack = (data) => JSON.parse(JSON.stringify(data));

router.get("/", (req, res) => {
  // If the user already has an account send them to the members page
  if(req.user) {
      res.redirect(`/owners/${req.user.id}`);
  }
  res.render("login");
})

router.get("/signup", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/");
  }
  res.render("signup");
});

router.get("/manager", isAuthenticated, function(req, res) {
  if(req.user.id === 1) {
    db.Owner.findAll({
      include: [db.Horse]
    }).then(dbOwner => {
      res.render("index", { owners: unpack(dbOwner) })
    })
  } else {
    res.redirect('/');
  }
});

router.get("/owners/:id", isAuthenticated, (req, res) => {
  if(req.user.id === req.params.id || req.user.id === 1) {
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
      res.render("owner", { owner: unpack(response), user: req.user});
  })
  } else {
    db.Owner.findOne({
      where: {
        id: req.user.id
      },
      include: {
          model: db.Horse,
          required: false,
          where: {
              OwnerId: req.user.id
          }
      }
  }).then(response => {
      res.render("owner", { owner: unpack(response)});
  })
  }
})

module.exports = router;