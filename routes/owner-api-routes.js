let router = require("express").Router();
let db = require("../models");
var passport = require("../config/passport");


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

// router.get('/seedOwners', (req, res) => {

// // 'Nancy', 'Klaus', '2021-02-13 04:54:57', '2021-02-13 04:54:57');
// // 'Mary Jo', 'McMan', '2021-02-13 04:54:57', '2021-02-13 04:54:57');
// // 'Lynn', 'Gunderson',
//     const sampleOwners = [
//         {
//             firstName: 'Stephanie',
//             lastName: 'Stull',
//             email: 'stephanie@gmail.com',
//             password: '12345'
//         },
//         {
//             firstName: 'Nancy',
//             lastName: 'Klaus',
//             email: 'nancy@gmail.com',
//             password: '12345'
//         },
//         {
//             firstName: 'Mary Jo',
//             lastName: 'McMan',
//             email: 'mary@gmail.com',
//             password: '12345'
//         },
//         {
//             firstName: 'Lynn',
//             lastName: 'Gunderson',
//             email: 'lynn@gmail.com',
//             password: '12345'
//         }
//     ]
//     db.Owner.create({
//         firstName: 'Stephanie',
//         lastName: 'Stull',
//         email: 'stephanie@gmail.com',
//         password: '12345678'
//     }).then(response => {
//         console.log("Owner Added");
//     }).then(function() {
//         res.send("Seed complete!")
//     })
// })

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