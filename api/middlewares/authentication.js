const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const ApiError = require('../models/error.model');

const secret = process.env.TOKEN_SECRET;
const tokenHeader = 'authorization';

const authentication = (request, response, next) => {
	let rawToken = request.headers[tokenHeader];
	if (!rawToken) rawToken = ' ';
	const token = rawToken.split(' ')[1];

	jwt.verify(token, secret, { ignoreExpiration: false }, (error, decoded) => {
		if (error) {
			response.status(403).json(new ApiError(403, 'Authentication required'));
		} else {
			User.where({ email: decoded.email }).findOne((error, user) => {
				if (error) response.status(403).json(new ApiError(403, 'Authentication required'));
				else next();
			});
		}
	});
};

module.exports = authentication;
