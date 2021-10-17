let express = require("express");
let app = express();
let port = 8000;
let path = require("path");

 //let staticPath = path.join(__dirname,'public');
 //app.use(express.static(staticPath));

 app.get("/", (req,res) => {
     res.send("hi ko");
 }); 

 app.get("/about", (req,res) => {
    res.send("hi ko");
}); 

 app.listen(port, () => {
     console.log("listening to port no 8000!")
 })