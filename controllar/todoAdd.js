
const todoSchema = require("../modal/todoSchema")


const todoAdd = (req, res) => {
    console.log("hiiitt")
    const {todo}  = req.body
    
    if (!todo) {    
        res.send("required field empty")
    }
    else {


        todoSchema.create(req.body, (error, data) => {
            if (error) {
                res.send(error)
            }
            else {
                res.send(data)
            }

        })

    }

}

module.exports = todoAdd