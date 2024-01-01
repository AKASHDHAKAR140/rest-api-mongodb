const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/restApi")
.then((res)=>{
    console.log("connection succesfully")
}).catch((error)=>{
    console.log("connection failed",error)
})