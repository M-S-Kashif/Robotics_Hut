console.log("Router Layer");
const express = require("express");
//const bcrypt = require("bcrypt");
const router = express.Router();     //Initializes a Router...

//Importing Service Layer in Router Layer...
const controllerLayer = require("../controller/controller_layer");
//const studentControllerLayer = require("../controller/student_controller_layer");

//Unsuccessful Login API...
router.get('/nouser', (req, res) => {
    res.render('nouser.ejs');
});

//HOME API...
router.get('/home', (req, res) => {
    res.render('home.ejs');
});

//Register APIs...
router.get('/register', (req, res) => {
    res.render('register.ejs');
});

router.post('/register', (req, res) => {
    //const hashedPassword = await bcrypt.hash(req.body.password, 10);
    //console.log(hashedPassword);

    let newaccount = req.body;
    console.log('Inserting new account',newaccount);
    controllerLayer.registerUser(newaccount);
    console.log("New Account Registered!");

    setTimeout(() => {
        res.redirect('/login');
    }, 5000);
});

//Login APIs...
router.get('/login', (req, res) => {
    res.render('./login.ejs');
});

router.post('/login', (req, res) => {
    let user = req.body;
    console.log("Logging In...", user);
    let loggedIn = controllerLayer.findAccount(user);
    console.log(loggedIn);

    if (!loggedIn) {
        setTimeout(() => {
            //res.redirect('/home');
            res.sendFile("home.html", { root: "./public" });
            console.log("Logged at Home!");
        }, 5000);
    } else {
        setTimeout(() => {
            //res.redirect('/nouser');
            res.sendFile("nouser.html", { root: "./public" });
            console.log("No User Found!");
        }, 500);
    }
});

//Change Password APIs...


//Other APIs...
router.get('/accounts', (req, res) => {
    controllerLayer.findAccount(res);
    //res.json({ result: users });    //Check this from test.js...
    //res.sendStatus(200);                  //Send the statuscode only once...
});

router.post('/accounts', (req, res) => {
    console.log('body', req.body);

    let newaccount = req.body;
    res.send(newaccount);
    //controllerLayer.registerUser(newaccount);
});

//Exporting all the contents for our script...
module.exports = router