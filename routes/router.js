const express = require("express")
const booking = require("../controllar/authentification/bookin")
const bookingget = require("../controllar/authentification/bookingdetails")
const login = require("../controllar/authentification/login")
const signup = require("../controllar/authentification/signup")

const todoAdd = require("../controllar/todoAdd")
const {DeleteAll ,Deleteone} = require("../controllar/tododelete")
const todoGet = require("../controllar/todoget")
const update = require("../controllar/todoupdate")

const routes  = express.Router() 



routes.post("/api/todo/add" ,todoAdd )

routes.delete("/api/todo/delete" ,DeleteAll )
routes.get("/api/todo/get" ,todoGet )
routes.patch("/api/todo/update:id" ,update )
routes.delete("/api/todo/delete:id" ,Deleteone )

//authentifiaction
routes.post("/api/signup" ,signup )
routes.post("/api/login" ,login )
routes.post("/api/booking" ,booking )
routes.get("/api/getbooking" ,bookingget )


module.exports  = routes