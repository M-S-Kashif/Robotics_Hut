var expect = require("chai").expect;
var request = require("request");

describe("Testing our Sign up Page", function () {
    var url = "http://localhost:8080/register";
    
    it("returns status 200 to check if api works", function (done) {
        request(url, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it("returns the response as a JSON object", function (done) {
        request(url, function (error, response) {
            expect(response).to.be.an('object');
            done();
        });
    });
});

describe("Testing our Sign up Page if it takes in credentials", function () {
    var url = "http://localhost:8080/accounts";
    //let accounts = req.body;
    done();
});

//var url = "http://localhost:8080/login";
    //var url = "http://localhost:8080/register";
    //var url = "http://localhost:8080/nouser";
    //var url = "http://localhost:8080/home";