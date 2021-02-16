let router = require("express").Router();
let db = require("../models");

// router.put("/edit-horses/:id", (req, res) => {
//     console.log("testing attention please");
//     // db.Horse.update(
//     //     {
//     //         name: req.body.horseName,
//     //         age: req.body.horseAge,
//     //         breed: req.body.horseBreed,
//     //         amFlakes: req.body.flakesAM,
//     //         pmFlakes: req.body.flakesPM,
//     //         grainServing: req.body.grainServing,
//     //         lastDewormer: req.body.lastDewormed,
//     //         lastVaccination: req.body.lastVaccinated,
//     //         lastCoggins: req.body.lastCoggins,
//     //         lastFarrier: req.body.lastFarrier,
//     //         Notes: req.body.editNotes
//     //     },
//     //     {where: {id:req.params.id}}
//     // ).then(function(response){
//     //     res.send("Edited horse info");
//     // });
// });

module.exports = router;