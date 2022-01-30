console.log(" Main Controller Layer");

//Importing DB Layer in Service Layer...
let dbo = require("../db/database");
let Accounts = dbo.db("RoboticsHut").collection("accounts");


//Initializing Dummy Accounts...
const A1 = {
    firstname: "Sohaib",
    lastname: "Kashif",
    email: "mskashif@deakin.edu.au",
    username: "Admin1",
    password: "cheese123"
};

const A2 = {
    firstname: 'Shahida',
    lastname: 'Siddique',
    email: "siddiquesh@deakin.edu.au",
    username: 'Admin2',
    password: 'siddiqueeeee'
};

const A3 = {
    firstname: 'Anika',
    lastname: 'Farha',
    email: "mskashif@deakin.edu.au",
    username: 'Admin3',
    password: 'tusi1234'
};

let dummyAccounts = [A1, A2, A3];
let loggedIn = false;



//Functions for sign in, sign up, and adding dummy accounts into the database...

//Inserting our dummy accounts into the database...
const insertDummies = (accounts) => {
    console.log("Inserting Dummy Projects...")

    //Insert our projects into the DB collection...
    accounts.insertMany(dummyAccounts, (err, result) => {
        if (err) { throw err; }
        else { console.log('Dummies Inserted', result); }
    });
}

const findAccount = (account) => {
    console.log('Find Account Function...')

    Accounts.find({ username: account.username, password: account.password }).toArray(function (err, result) {
        if (err) {
            throw err;
            loggedIn = false;
        }
        else {
            console.log("Account Found: ", result);
            loggedIn = true;
        }
    });
    return loggedIn;
}

const registerUser = (account, res) => {
    //Insert a project into the DB collection...
    Accounts.insertOne(account, (err, result) => {
        if (err) {
            throw err;
        } else {
            //Adding contents into an array...
            //dummyAccounts.push(account);
            console.log('Account Inserted: ', result);
            //res.json({ result: [result.username, result.lastname, result.username, result.email, result.password]});
        }
    });
}


setTimeout(function () {
//   insertDummies(Accounts);
}, 5000);


module.exports = {
    findAccount, registerUser
}

