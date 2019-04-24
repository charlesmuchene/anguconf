const jwt = require('jsonwebtoken');
const ApiError = require('../models/error.model');

const secret = process.env.TOKEN_SECRET;
const tokenHeader = 'authorization';

const authentication = (request, response, next) => {
    let rawToken = request.headers[tokenHeader]
    if (!rawToken) rawToken = ' '
    const token = rawToken.split(' ')[1];
    
    console.log(token)
    jwt.verify(token, secret, (error, decoded) => {
        if (error) {
            response.status(403).json(new ApiError(403, 'Authentication required'))
        }
        else {
            console.log(decoded);
            response.json({})
        }
    });
};

module.exports = authentication;