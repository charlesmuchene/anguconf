const router = require('express').Router();
const user = require('../controllers/user.controller.js');
const authentication = require('../middlewares/authentication');

//Retrive all users
router.get('/', authentication, user.findAll);

//Retrieve user with the given id
router.get('/:userId', authentication, user.findOne);

// login user
router.post('/login', user.login);

//create user
router.post('/', user.create);

//upate user with given id
router.put('/:userId', authentication, user.update);

// Delete a user with the given id
router.delete('/:userId', authentication, user.delete);

module.exports = router;
