const mongoos = require("mongoose")

const BookingScemea =  mongoos.Schema({

    user_name:{type : String},
    cnic:{type : String ,maxlength :4},
    address:{type : String , },
    number:{type : String},
    noOfper:{type : String},
    noOfday:{type : String},

})
const BookingModal = mongoos.model("bookinguser" , BookingScemea)

module.exports =BookingModal 