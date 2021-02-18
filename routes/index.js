let router = require('express').Router();

router.use("/api", require("./owner-api-routes"));
router.use(require("./html-routes"));

module.exports = router;