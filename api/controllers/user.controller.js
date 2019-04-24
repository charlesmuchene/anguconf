const User=require('../models/user.model');
const ApiError = require('../models/error.model');
const jwt = require('jsonwebtoken');

const secret = process.env.TOKEN_SECRET;
const tokenHeader = 'Authorization';

//Create and save a new user
exports.create=(request,response)=>{
    const user=new User();

    user.firstname=request.body.firstname,
    user.lastname=request.body.lastname,
    user.password=request.body.password,
    user.email=request.body.email,

    user.save().then((error, data) => {
        if (error) return next(error)
        const token = generateToken(user);
        response.set(tokenHeader, token).json({token})
    })
    .catch((error) =>response.status(500).json(new ApiError(500, error.message || 'Error while creating a User'))
);
};

exports.login = (req, res, next) => {

    const { email, password } = req.body;

    console.log(email, password)
	User.findOne({ email: email }, (err, user) => {
        if (err) {
            next(err);
        }
        else {
            const match = user.verifyPassword(password)
            if (match) {
                const token = generateToken(user);
                res.set(tokenHeader, token).json({ token })
            } else {
                res.status(400).json(new ApiError(400, 'Invalid credentials'))
            }
        }
	});
}

// Retrieve and return all users
exports.findAll = (request, response) => {
User.find()
    .then((user) => {
        response.json(user);
    })
    .catch((error) =>
        response.status(500).json({
            error: {
                code: 500,
                message: error.message || 'Error retrieving User'
            }
        })
    );
};

//Retrieve and return one user related to the id
exports.findOne = (request, response) => {
const id= request.params.userId;
User.findById(id)
    .then((user) => {
        response.json(user);
    })
    .catch((error) =>
        response.status(500).json({
            error: {
                code: 500,
                message: error.message || 'Error retrieving User'
            }
        })
    );
};
//Deleting a user
exports.delete=(request,response)=>{
    const id=request.params.userId;
    console.log(id);
    User.findByIdAndRemove(id)
        .then((user)=>{
            response.json(user);
        })
        .catch((error)=>
        response.status(500).json({
            error:{
                code:500,
                message:error.message|| 'Error retrieving user'
            }
        })
        );


};
// update a User
exports.update=(request,response)=>{
    const id=request.params.userId;
    console.log(id);
    User.findByIdAndUpdate(id, request.body, {new :true})
        .then((user)=>{
            response.status(200).json(user);
        })
        .catch((error)=>
        response.status(500).json({
            error:{
                code:500,
                message:error.message|| 'Error retrieving user'
            }
        })
        );


};

function generateToken(user) {
    return jwt.sign({
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        role: user.role
    }, secret, {
        expiresIn: '1d'
    });
}