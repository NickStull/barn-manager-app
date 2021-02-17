let router = require("express").Router();
let db = require("../models");
var passport = require("../config/passport");

router.post("/login", passport.authenticate("local"), function(req, res) {
    console.log(req.user)
    res.json(req.user);
  });

router.get("/logout", function(req, res) {
req.logout();
res.redirect("/");
});

router.post("/signup", (req, res) => {
    db.Owner.create(req.body).then(response => {
        console.log("Owner Added");
    }).then(function() {
        res.redirect(307, "/api/login");
      })
})

router.post("/owners", (req, res) => {
    console.log("----------------post router------------------");
    console.log(req.body);
    // db.Owner.create(req.body).then(response => {
    //     console.log("Owner Added");
    // }).then(function() {
    //     res.redirect(307, "/api/login");
    // });
})

router.post("/owners/:id", (req, res) => {
    db.Horse.create({
        name: req.body.horseName,
        age: req.body.horseAge,
        breed: req.body.horseBreed,
        Notes: req.body.horseNotes,
        OwnerId: req.params.id
    }).then(response => {
        res.send("Horse Added");
    });
})

// This is not done yet.  We need to figure out where we are going to edit the owner
router.put("/owners/:id", (req, res) => {
    db.Owner.update({lastName: "Johnson"}, {
        where: {
            id: req.params.id
        }
    }).then(function(response){
        res.send("Changed owner info");
    })
})

router.delete("/owners/:id", (req, res) => {
    db.Owner.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(response){
        res.send("Owner deleted");
    })
    
})

router.put("/horses/:id", (req, res) => {
    var column = req.body.column;
    var today = req.body.today;
    db.Horse.update(
        { [column]: today },
        { where: {id:req.params.id} }
    ).then(function(response){
        res.send("Changed horse info");
    });
});

router.put("/edit-horses/:id", (req, res) => {
    console.log(req.body);
    db.Horse.update(
        {
            name: req.body.horseName,
            age: req.body.horseAge,
            breed: req.body.horseBreed,
            amFlakes: req.body.flakesAM,
            pmFlakes: req.body.flakesPM,
            grainServing: req.body.grainServing,
            lastDewormer: req.body.lastDewormed,
            lastVaccination: req.body.lastVaccinated,
            lastCoggins: req.body.lastCoggins,
            lastFarrier: req.body.lastFarrier,
            Notes: req.body.editNotes
        },
        {where: {id:req.params.id}}
    ).then(function(response){
        res.send("Edited horse info");
    });
});

router.put("/edit-horse-note/:id", (req, res) => {
    db.Horse.update(
        {
            Notes: req.body.note
        },
        {where: {id:req.params.id}}
    ).then(function(response){
        res.send("Edited horse note")
    })
})

module.exports = router;