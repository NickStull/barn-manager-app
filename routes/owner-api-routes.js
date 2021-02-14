let router = require("express").Router();
let db = require("../models");

router.get("/owners/:id", (req, res) => {
    db.Owner.findAll({
        include: {
            model: db.Horse,
            required: true,
            where: {
                OwnerId: req.params.id
            }
        }
    }).then(response => {
        res.json(response);
    })
})

router.post("/owners", (req, res) => {
    db.Owner.create(req.body).then(response => {
        res.send("Owner Added");
    });
})


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

module.exports = router;