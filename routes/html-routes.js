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

module.exports = router;