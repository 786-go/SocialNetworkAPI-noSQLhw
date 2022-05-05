const router = require("express").Router();
const db = require("../../models")

router.get("/api/users", function(req,res) {
db.User.find({})
.then(function(records){
    res.json(records)
})
})