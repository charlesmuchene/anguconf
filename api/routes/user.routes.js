const router=require('express').Router();
const user=require('../controllers/user.controller.js');

//Retrive all users
router.get('/',user.findAll);

//Retrieve user with the given id
//router.get('/:userId',user.findOne);

//create user
router.post('/',user.update);

//upate user with given id 
//router.put('/:userId',user.update);

// Delete a user with the given id
// router.delete('/:userId',user.delete);

module.exports=router;