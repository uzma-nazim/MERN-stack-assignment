
const todoSchema = require("../modal/todoSchema")


const todoGet = (req, res) => {


    todoSchema.find({}, (error, data) => {
        if (error) {
            res.send(error)
        }
        else {
            res.send(data)
        }

    })


}

module.exports = todoGet