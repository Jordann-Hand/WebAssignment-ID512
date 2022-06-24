const router = require("express").Router()

let products_controller = require("../controllers/products")
let teas_controller = require("../controllers/teas")

router.get("/", products_controller.index)
router.get("/teas", teas_controller.index)

module.exports = router