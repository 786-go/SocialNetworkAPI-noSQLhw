const router = require("express").Router();
const db = require("../../models")

router.get("/api/users", function (req, res) {
    db.User.find({})
        .then(function (records) {
            res.json(records)
        })
})

router.get("/api/users/:id", function (req, res) {
    db.User.findById(req.params.id)
        .then(function (records) {
            res.json(records)
        })
})

router.post("/api/users/", function (req, res) {
    db.User.create(req.body)
        .then(function (records) {
            res.json(records)
        })
})

router.put("/api/users/:id", function (req, res) {
    db.User.findOneAndUpdate({_id:req.params.id}, {$set:req.body})
        .then(function (records) {
            res.json(records)
        })
})

router.delete("/api/users/:id", function (req, res) {
    db.User.findOneAndDelete({_id:req.params.id})
        .then(function (records) {
            res.json(records)
        })
})

//update
router.post("/api/users/:userId/friends/:friendId", function (req, res) {
    db.User.findOneAndUpdate({_id:req.params.userId},
         {$push:{friends:req.params.friendId}},
         {new:true}) 
        .then(function (records) {console.log(records)
            res.json(records)
        })
})

//update

router.delete("/api/users/:userId/friends/:friendId", function (req, res) {
    db.User.findOneAndUpdate({_id:req.params.userId},
         {$pull:{friends:req.params.friendId}},
         {new:true}) 
        .then(function (records) {
            res.json(records)
        })
})

module.exports = router