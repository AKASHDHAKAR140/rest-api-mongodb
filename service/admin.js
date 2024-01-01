const express = require("express")
const router = express.Router()
const model = require("../models/admin")

router.post("/admin", async (req, res) => {

    try {
        const adding = new model(req.body);
        const insert = await adding.save();
        res.status(200).json(insert)
    } catch (error) {
        res.status(404).json({ message: "something went wrong" })

    }
})

router.get("/admin", async (req, res) => {
    try {
        const finddata = await model.find({})

        res.status(200).json(finddata)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "something went wrong" })
    }
})
router.get("/admin/:id", async (req, res) => {

    try {
        const _id = req.params.id
        const finddata = await model.findById({ _id })
        res.status(200).json(finddata)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "something went wrong" })
    }
})

router.patch("/admin/:id", async (req, res) => {

    try {
        const _id = req.params.id;
        const data = req.body
        const finddata = await model.findByIdAndUpdate(_id, req.body, { new: true })
        res.status(200).json(finddata)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "something went wrong" })
    }
})
module.exports = router;
