const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const createUser = require("../controllers/createUserController");

router.get("/", (req,res) => {
    res.render("index", {message : null});
})

router.post("/home/:username", homeController.home);
router.post("/", createUser.insert);

module.exports = router;