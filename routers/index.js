const router = require("express").Router()

router.use(require("../service/admin"))
router.use(require("../service/user"))

module.exports = router;