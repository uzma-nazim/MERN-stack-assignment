
const BookingModal = require("../../modal/bookingmodal")



const bookingget = (req, res) => {


    BookingModal.find( (error, data) => {
        if (error) {
            res.send(error)
        }
        
        else{
            console.log(data)
        }
    })


}

module.exports = bookingget