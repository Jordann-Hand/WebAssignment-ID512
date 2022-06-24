//route for teas page
const router = require("express").Router()

let teas_controller = require("../controllers/teas")

router.get("/", teas_controller.index)

module.exports = router