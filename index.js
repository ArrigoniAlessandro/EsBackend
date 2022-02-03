const { request, response, query } = require("express");
var express = require("express");
var apiServer = express();
var fs = require("fs");
const { get } = require("http");
const { setFlagsFromString } = require("v8");

var port = 3000;
var host = "localhost";
apiServer.listen(port, host, () => {
    console.log("server running at http://%s:%d", host, port);
});


apiServer.post("/signIn", (req, res) => {
    if (req.body.username.password) {
        fs.readFile("Users.json", (err, data) => {
            var Users = JSON.parse(data);
            Users.push({ "Username": req.body.username, "PW": req.body.password });
            Users = JSON.stringify(Users, null, 3);
            fs.writeFile("Users.json", Users, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("username:" + req.body.username.password);
                res.send("Done!");
            });
        });
    }
});


apiServer.post("/logIn"), (req,res) =>{
    
}
