const express = require("express");
const { createConnection } = require("mysql");

const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

exports.lockscreen = (req,res) => {
    connection.query("SELECT * FROM user", (err, data) => {
        if(!err) {
            const users = JSON.parse(JSON.stringify(data));
            console.log(users);
            // res.render("index", {data:users, message: req.query.result});
            res.render("teste", {users:users});
        } else {
            console.log(err)
        }
    })
}