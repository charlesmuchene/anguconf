const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    fullName:{
        type:String,
        required:'Full name can\'t be empty'
    },
    password:{
        type:String,
        required:'Password can\'t be empty',
        unique: true
        
    },
    email:{
        type:String,
        required:'Email can\'t be empty',
    }


});
// validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

module.exports=mongoose.model('User',userSchema);