const router=require('express').Router();
const User=require('../models/user.model.js');
const user=require('../controllers/user.controller.js');
const jwt = require('jsonwebtoken');
const fs = require("fs");
const RSA_PRIVATE_KEY=fs.readFileSync('./private.key');


//Retrive all users
router.get('/',user.findAll);

//Retrieve user with the given id
router.get('/:userId',user.findOne);

//create user
router.post('/signup',user.create);

router.post('/login',(req,res,next)=>{
    let credentials=req.body;
    user.findOne({email:credentials.email},(err,user)=>{
        if(err) next(err);
        //Email exists
        if(user){
            if(!user.verifyPassword(credentials.password)){
                res.status(400).json({
                    "status":"fail",
                   "message":"Incorrect password!" 
                });
            }
            else{
                // token key
                const token=jwt.sign({},RSA_PRIVATE_KEY,{
                    algorithm:'RS256',
                    expiresIn:3600,

                });
            }
        }
        else{
            res.status(400).json({
                "status":"fail",
                "message":"username does not exist"
            });
        }
    });
});








//upate user with given id 
router.put('/:userId',user.update);

// Delete a user with the given id
router.delete('/:userId',user.delete);

module.exports=router;