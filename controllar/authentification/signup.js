const SignupModal = require("../../modal/signupSchma")
const bcrypt = require("bcrypt")

const signup = async (req, res)=>{
const {user_name , email, password , contact } = req.body
console.log(req.body);
if(!user_name  || !email || !password  || !contact ){
    res.send("required field are empty")

}
else{

    const hashpass = await bcrypt.hash(password , 10)
    
    const userObj ={
        ...req.body,
        password:hashpass
    }
    SignupModal.findOne({email} ,(err, userexist)=>{
        if(err){
            res.json( {err})
            
        }
        if(userexist){
            res.json( {massage:"Email already exist"})

        }
        else{
            
                    SignupModal.create( userObj , (error, userData)=>{
                        if(error){
                            res.json( {error})
                        }
                
                        else{
                            res.json({massage:"Successfully Signup" ,data: userData})
                        }
                
                    
                    })
            
        }
    })


}




}


module.exports = signup