const express = require("express")
const router = express.Router()
const model = require("../models/user")

router.post("/user", async (req, res) => {

    try {
        const adding = new model(req.body);
        const insert = await adding.save();
        res.status(200).json(insert)
    } catch (error) {



        res.status(404).json({ message: "something went wrong" })

    }
})

module.exports = router;
