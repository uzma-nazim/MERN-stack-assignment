const todoSchema = require("../modal/todoSchema")


const Deleteone = (req,res)=>{
    const {id} = req.params     
    console.log(id);
    todoSchema.deleteOne({id},(error , data)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send(data)
        }

    })


}


const DeleteAll = (req,res)=>{
    todoSchema.deleteMany({},(error , data)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send(data)
        }

    })


}


module.exports = {

    DeleteAll,
    Deleteone
}