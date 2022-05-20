const router = require("express").Router()
const userRoutes = require("./user-routes")
const thoughtsRoutes = require("./thoughts-routes")

module.exports = {userRoutes, thoughtsRoutes}