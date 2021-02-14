const db = require("../models");
var router = require("express").Router();
var path = require( 'path');

let unpack = (data) => JSON.parse(JSON.stringify(data));

router.get("/", (req, res) => {
    db.Owner.findAll({
        include: [db.Horse]
      }).then(dbOwner => {
        // console.log(dbOwner);
        res.render("index", { owners: unpack(dbOwner) })
    })
})

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
      res.render("owner", { owner: unpack(response)});
  })
})

module.exports = router;