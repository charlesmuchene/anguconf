const mongoose=require('mongoose');

const ticketSchema= mongoose.Schema({
    fullName: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    quantity: {
       type: Number,
       required:[true, 1]

    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    amount: Number,
    payment:{
        type: Number,
        cardNo: Number,
        cardType: String,
        required:[true, " Payment field is empty"]
    }

});
// validation for email
ticketSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');


mongoose.model('Ticket', ticketSchema);