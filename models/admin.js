const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
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

const admin = new mongoose.model("admin", Schema)
module.exports = admin;