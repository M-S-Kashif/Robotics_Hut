console.log(" Student Controller Layer");

//Importing DB Layer in Service Layer...
let dbo = require("../db/database");
let Blogs = dbo.db("RoboticsHut").collection("blogs");

//Initializing Dummy Blog...
const B1 = {
    ID: 1,
    title: "Blog Title",
    author: "Sohaib",
    category: "Dummy",
    image: "Blog.jpg",
    text: "This is our dummy text for our Blog",
    link: "link"
};

// Functions for adding all blogs, adding new blogs, finding all blogs, 
// finding blogs by ID(or category, which could be done by the Admin),
// and adding dummy blogs into the database...

//Inserting our dummy accounts into the database...
const insertDummyBlog = (Blogs) => {
    console.log("Inserting Dummy Blog...");

    //Insert our projects into the DB collection...
    Blogs.insertOne(B1, (err, result) => {
        if (err) { throw err; }
        else { console.log('Dummies Inserted', result); }
    });
}

//Inserting all blogs from the database...
const insertAllBlogs = (Blogs) => {
    console.log("Inserting Dummy Blog...");

    //Insert our projects into the DB collection...
    Blogs.insertMany(B1, (err, result) => {
        if (err) { throw err; }
        else { console.log('Dummies Inserted', result); }
    });
}

//Inserting new blogs from the database...
const insertNewBlog = (blog, res) => {
    console.log("Inserting New Dummy Blogs...");

    //Insert our projects into the DB collection...
    Blogs.insertOne(blog, (err, result) => {
        if (err) { throw err; }
        else { console.log('Dummies Inserted', result); }
    });
}

//Finding blogs by ID...
const findBlogbyID = (Blog) => {
    console.log('Find Blog Function...')

    Blog.find({ ID: Blog.ID }).toArray(function (err, result) {
        if (err) {
            throw err;
            console.log("Blog not Found");
        }
        else {
            console.log("Blog Found: ", result);
        }
    });
}

//Finding blogs by Category...
const findBlogbyCategory = (Blog) => {
    console.log('Find Blog Function...')

    Blog.find({ category: Blog.category }).toArray(function (err, result) {
        if (err) {
            throw err;
            console.log("Blog not Found");
        }
        else {
            console.log("Blog Found: ", result);
        }
    });
}

/*
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
*/


setTimeout(function () {
    //insertDummyBlog(Blogs);
    //console.log("Dummy Blog Inserted");
}, 5000);


module.exports = {
    insertAllBlogs, insertNewBlog, findBlogbyCategory, findBlogbyID
}