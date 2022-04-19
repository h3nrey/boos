const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const createUser = require("../controllers/createUserController");
const res = require("express/lib/response");

router.get("/", (req,res) => {
    res.render("index", {message : null});
})

router.post("/home/:username", homeController.home);
router.post("/", createUser.insert);
router.get("/home", (req,res) => {
    res.render("home");
})

module.exports = router;