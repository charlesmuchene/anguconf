const User = require('../models/user.model');
const ApiError = require('../models/error.model');
const jwt = require('jsonwebtoken');

const secret = (() => {
	const pass = process.env.TOKEN_SECRET;
	if (!pass) throw new Error('Jwt token secret not found!');
	return pass;
})();

const tokenHeader = 'Authorization';

//Create and save a new user
exports.create = (request, response) => {
	const user = new User();
	(user.firstname = request.body.firstname),
		(user.lastname = request.body.lastname),
		(user.password = request.body.password),
		(user.email = request.body.email),
		user
			.save()
			.then((error, data) => {
				if (error) {
					next(error);
				} else {
					const token = generateToken(user);
					response.set(tokenHeader, token).json({ token });
				}
			})
			.catch((error) => {
				response.status(400).json(new ApiError(400, error.message || 'Error while signing up user'));
			});
};

exports.login = (req, res, next) => {
	const { email, password } = req.body;

	User.findOne({ email: email }, (err, user) => {
		if (err) {
			next(err);
		} else {
			if (!user) return res.status(400).json(new ApiError(400, 'Unknown user'));
			const match = user.verifyPassword(password);
			if (match) {
				const token = generateToken(user);
				res.set(tokenHeader, token).json({ token });
			} else {
				res.status(400).json(new ApiError(400, 'Invalid credentials'));
			}
		}
	});
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
	const id = request.params.userId;
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
exports.delete = (request, response) => {
	const id = request.params.userId;
	User.findByIdAndRemove(id)
		.then((user) => {
			response.json(user);
		})
		.catch((error) =>
			response.status(500).json({
				error: {
					code: 500,
					message: error.message || 'Error retrieving user'
				}
			})
		);
};
// update a User
exports.update = (request, response) => {
	const id = request.params.userId;
	User.findByIdAndUpdate(id, request.body, { new: true })
		.then((user) => {
			response.status(200).json(user);
		})
		.catch((error) =>
			response.status(500).json({
				error: {
					code: 500,
					message: error.message || 'Error retrieving user'
				}
			})
		);
};

function generateToken(user) {
	return jwt.sign(
		{
			email: user.email,
			firstname: user.firstname,
			lastname: user.lastname,
			role: user.role
		},
		secret,
		{
			expiresIn: '1d'
		}
	);
}
