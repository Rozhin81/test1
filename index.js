// getting-started.js
const mongoose = require("mongoose");
var http = require('http');
var info;

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
    info = await admin.buildInfo();
}

http.createServer(function (req, res) {
  res.write("ibndfo");
  res.end(); 
}).listen(3000);
