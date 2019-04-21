const User=require('../models/user.model');
//Create and save a new user
exports.create=(request,response)=>{
    const user=new User();
    user.fullName=request.body.fullName,
    user.password=request.body.password,
    user.email=request.body.email,
    user.save().then((data) => response.json(data)).catch((error) =>
    response.status(500).json({
        error: {
            code: 500,
            message: error.message || 'Error while creating a User'
        }
    })
);
};

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
const id= request.params.id;
User.findOne({id})
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
exports.Delete=(request,response)=>{
    const id=request.params.id;
    console.log(id);
    User.remove(id)
        .then((user)=>{
            response.json(ticket);
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

