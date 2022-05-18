const todoSchema = require("../modal/todoSchema")

const update = (req, res)=>{
    const {_id} = req.params     
    console.log(_id);
    todoSchema.updateOne({ _id:"6282a12519d52adbcf4a4e88"} , req.body,(error , data)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send(data)
        }

    })

}


module.exports = update