let router = require('express').Router();

router.use("/api", require("./owner-api-routes"));
// router.use("/api", require("./horse-api-routes"));
router.use(require("./html-routes"));

module.exports = router;