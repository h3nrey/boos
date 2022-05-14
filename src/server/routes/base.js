const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const createUser = require("../controllers/createUserController");
const userController = require("../controllers/userController");
const res = require("express/lib/response");

// router.get("/", (req,res) => {
//     let result = req.query.result;
//     res.render("index", {message : result});
// })

router.get("/", userController.lockscreen);
router.get("/teste", userController.lockscreen);

router.post("/:username", homeController.home);
router.post("/", createUser.insert);

//essa rota é apenas para testes
// router.get("/home/:username", (req,res) => {
//     res.render("home");
// })

module.exports = router;