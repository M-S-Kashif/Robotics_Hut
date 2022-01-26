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
router.get('/homepage', (req, res) => {
    res.render('./homepage.ejs');
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
        return res.redirect('/login');
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

    if (loggedIn) {
        setTimeout(() => {
            return res.redirect('http://localhost:8080/homepage');
            console.log("Logged in at Home!")
        }, 5000);
    } else {
        setTimeout(() => {
            res.redirect('/nouser');
            console.log("No User Found!");
        }, 500);
    }
});


//Change Password APIs (Auxiliary Function; will be implemented later on)...

//Other APIs...
router.get('/accounts', (req, res) => {
    controllerLayer.findAccount(res);
    //res.sendStatus(200);                  //Send the statuscode only once...
});

router.post('/accounts', (req, res) => {
    res.send(req.body);
});

//Exporting all the contents for our script...
module.exports = router