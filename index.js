const express = require("express")
require("./db")
const router = require("./routers")
//const model = require("./models/schema")
const app = express()

app.use(express.json())
app.use(router);

app.listen(8085,(req,res)=>{
    console.log("listening port 8085")
})