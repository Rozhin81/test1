// getting-started.js
const mongoose = require("mongoose");
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 8080

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect(
      "mongodb://admin:c8olxij6adhpyuq@remote-asiatech.runflare.com:31132/greenhouse",
      {
            maxPoolSize: 10,
            authSource: "admin",
            user: "admin",
            pass: "c8olxij6adhpyuq"
      }
    );
    
    var admin = new mongoose.mongo.Admin(mongoose.connection.db);
    admin.buildInfo(function (err, info) {
       console.log(info.version);
    });
      
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

