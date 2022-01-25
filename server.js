//Importing Libraries
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Making a new Database and adding Dummy Accounts...
let projectsDB = require('./db/accounts_db');
projectsDB.connect();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Initializing new routers...
let accountsRouter = require('./routes/main_router');
app.use('/', accountsRouter);

//let studentRouter = require('./routes/student_router');
//app.use('/home', accountsRouter);

//Print on Console...
app.listen(8080, function () {
    console.log("App listening on Port 8080!")
})