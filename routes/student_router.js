console.log("Router Layer");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();     //Initializes a Router...

//Importing Service Layer in Router Layer...
const controllerLayer = require("../controller/controller_layer");

//Home API...
router.get('/home', (req, res) => {
    res.render('home.ejs');
});

