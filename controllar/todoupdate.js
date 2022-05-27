const todoSchema = require("../modal/todoSchema")

const update = (req, res)=>{
    const {id} = req.params     

    todoSchema.updateOne({id} , req.body,(error , data)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send(data)
        }

    })

}


module.exports = update