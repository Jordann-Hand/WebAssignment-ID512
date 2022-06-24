//router page for all products
const router = require("express").Router()

let products_controller = require("../controllers/products")
let teas_controller = require("../controllers/teas") //using teas controller to make a route off products
let wares_controller = require("../controllers/brewwares") //using brewwares controller to do the same

router.get("/", products_controller.index)
router.get("/teas", teas_controller.index) //not styling
router.get("/brewwares", wares_controller.index) //not styling

module.exports = router