let router = require("express").Router();
let db = require("../models");

// Moved to HTML routes. Leaving her just in case.
// router.get("/owners/:id", (req, res) => {
//     db.Owner.findAll({
//         include: {
//             model: db.Horse,
//             required: true,
//             where: {
//                 OwnerId: req.params.id
//             }
//         }
//     }).then(response => {
//         res.json(response);
//     })
// })

router.post("/signup", (req, res) => {
    db.Owner.create(req.body).then(response => {
        console.log("Owner Added");
    }).then(function() {
        res.redirect(307, "/api/login");
      })
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
    })
});

module.exports = router;