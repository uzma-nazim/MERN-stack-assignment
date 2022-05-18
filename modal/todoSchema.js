const mongoos = require("mongoose")

const todoSchema = mongoos.Schema({
    todo :{type: String},

    
    created_on : {
        type : Date,
        default:Date.now
    }
})

const TodoModal = mongoos.model("todo" ,todoSchema )


module.exports = TodoModal