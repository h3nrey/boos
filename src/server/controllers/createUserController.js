const express = require("express");
const { createPool } = require("mysql");

const pool = createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})


//Insert a new user on database
exports.insert = (req,res) => {
    const  {username, email, password} = req.body;
    
    pool.getConnection((err,connection) => {
        if(err) throw err;
        connection.query("INSERT INTO user SET username = ?, email = ?, password = ?", [username, email, password], (err, user) => {
            console.log("password", password)
            connection.release();

            if(!err) {
                res.render("index", {message:"User added successfully"});
            } else {
                console.log(err);
            }

            console.log("The new user has this informations: \n", user);
        })
    })
}