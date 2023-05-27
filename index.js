// getting-started.js
const mongoose = require("mongoose");
var http = require('http');

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
    


//create a server object:
http.createServer(function (req, res) {
  
    var admin = new mongoose.mongo.Admin(mongoose.connection.db);
    var info = await admin.buildInfo();
  
  res.write('Hello World!' + info.version); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 8080
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

