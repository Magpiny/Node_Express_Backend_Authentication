const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    oringin : "http://localhost:8081"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//simple route
app.get("/", (req, res)=>{
    res.json({message : "Welcome to my Nodejs App"})
});
// set port, listen for requests
const port = process.env.PORT || 9090;
app.listen(port, ()=>{
    console.log("Server is runnig on ", port)
})