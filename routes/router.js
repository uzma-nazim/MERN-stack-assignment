const express = require("express")

const todoAdd = require("../controllar/todoAdd")
const {DeleteAll ,Deleteone} = require("../controllar/tododelete")
const todoGet = require("../controllar/todoget")
const update = require("../controllar/todoupdate")

const routes  = express.Router() 



routes.post("/api/todo/add" ,todoAdd )

routes.delete("/api/todo/delete" ,DeleteAll )
routes.get("/api/todo/get" ,todoGet )
routes.patch("/api/todo/update:_id" ,update )


routes.delete("/api/todo/delete:id" ,Deleteone )


module.exports  = routes