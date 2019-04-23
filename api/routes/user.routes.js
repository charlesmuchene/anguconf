const router = require('express').Router();
const User = require('../models/user.model.js');
const user = require('../controllers/user.controller.js');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const RSA_PRIVATE_KEY = fs.readFileSync('./private.key');

//Retrive all users
router.get('/', user.findAll);

//Retrieve user with the given id
router.get('/:userId', user.findOne);

//create user
router.post('/signup', user.create);

router.post('/login', user.login);

//upate user with given id
router.put('/:userId', user.update);

// Delete a user with the given id
router.delete('/:userId', user.delete);

module.exports = router;
