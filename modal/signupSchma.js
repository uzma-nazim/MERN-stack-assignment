const mongoos = require("mongoose")

const SignupScemea =  mongoos.Schema({

    user_name:{type : String},
    email:{type : String},
    contact:{type : String , maxlength :11},
    password:{type : String},

})
const SignupModal = mongoos.model("user" , SignupScemea)

module.exports =SignupModal 