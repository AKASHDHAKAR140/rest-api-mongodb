const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    adminId: {
        type: Number,
    },

    name: {
        type: String,
        require: true
    },
    city: {
        type: String,

    },
    address: {
        type: String,

    },
})

const user= new mongoose.model("user", Schema)
module.exports = user;