const express = require("express")
const mongoos  = require("mongoose")
const cors = require("cors")

const routes = require("./routes/router")

const app = express()
const PORT = 5000|| process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


const URI = `mongodb+srv://admin:admin123@cluster0.ismbs.mongodb.net/assignment`
mongoos.connect(URI)
mongoos.connection.on("connected" ,()=> console.log("Connected db"))
mongoos.connection.on("error" ,(errr)=> console.log(errr))

app.use(routes)





app.listen( PORT , console.log("Server is runing"))
