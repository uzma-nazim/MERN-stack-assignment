const bcrypt = require("bcrypt")
const SignupModal = require("../../modal/signupSchma")

const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.json({ massage: "required field are empty" })
    }
    else {
        try {
            const user = await SignupModal.findOne({ email })
            
            if(user){

                const comparePass = await bcrypt.compare(password , user.password) 
                if(comparePass){
                    res.json({ data: user})
                }
                else{
                    res.json({"massage" : "invalid Password"})


                }
            }
            else{

                res.json({"massage" : "invalid User"})

            }



        }
        catch (err) {
            res.json({ "err ": err })

        }
    }



}
module.exports = login