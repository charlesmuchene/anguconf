const User=require('../models/user.model');
//Create and save a new user
exports.create=(request,response)=>{
    const user=new User();
    user.firstname=request.body.firstname,
    user.lastname=request.body.lastname,
    user.password=request.body.password,
    user.email=request.body.email,

    user.save().then((data) => response.json(data))
    .catch((error) =>response.status(500).json({
    
        error: {
            code: 500,
            message: error.message || 'Error while creating a User'
        }
    })
);
};

exports.login = (request, response, next) => {
    let credentials = req.body;
	user.findOne({ email: credentials.email }, (err, user) => {
		if (err) next(err);
		//Email exists
		if (user) {
			if (!user.verifyPassword(credentials.password)) {
				res.status(400).json({
					status: 'fail',
					message: 'Incorrect password!'
				});
			} else {
				// token key
				const token = jwt.sign({}, RSA_PRIVATE_KEY, {
					algorithm: 'RS256',
					expiresIn: 3600
				});
			}
		} else {
			res.status(400).json({
				status: 'fail',
				message: 'username does not exist'
			});
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

