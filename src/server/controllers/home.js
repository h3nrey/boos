const express = require("express");
const { createPool } = require("mysql");

const pool = createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

exports.home = (req,res) => {
    const  {username, email, password} = req.body;
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log("Connected as ID: " + connection.threadID);

        connection.query("SELECT * FROM user WHERE username = ?", [req.params.username] ,(err, data) => {
            connection.release();
            console.log(`objecto req: ${req.body.password}`)
            if (data[0] === undefined) {
                res.render("index", {message:`${req.params.username} não é um usuário cadastrado`})
            }
            if(!err && data !== undefined) {
                if(password === data[0].password) res.render("home", {user: data[0]});
                else res.render("index", {message:`${password} não é uma senha válida, tente novamente`})
            } else{
                res.redirect("/")
            }

            console.log("the data of database is \n", data)
        })
    })
}