const express = require("express");
const app  = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

//static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/scripts", express.static(__dirname + "public/scritps"));
app.use("/assets", express.static(__dirname + "public/assets"));

//Template Engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

//Middleware
app.use(express.urlencoded({ extended : true }))

//Parse application/json
app.use(express.json());

const router = require("./src/server/routes/base");
app.use("/", router);

//listening port
app.listen(port, () => console.log(`listening on port ${port}`));