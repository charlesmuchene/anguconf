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
            message: error.message || 'Error while creating a session'
        }
    })
);
};

// Retrieve and return all tickets
exports.findAll = (request, response) => {
User.find()
    .then((user) => {
        response.json(user);
    })
    .catch((error) =>
        response.status(500).json({
            error: {
                code: 500,
                message: error.message || 'Error retrieving sessions'
            }
        })
    );
};

//Retrieve and return one ticket related to the id
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
                message: error.message || 'Error retrieving Session'
            }
        })
    );
};

