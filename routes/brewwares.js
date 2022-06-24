// route for brewwares
const router = require("express").Router()

let brewwares_controller = require("../controllers/brewwares")

router.get("/", brewwares_controller.index)

module.exports = router