/// Dependencies

// Modules
require('dotenv').config({ debug: process.env.DEBUG });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const createError = require('http-errors');

// Routes
const sessionRouter = require('./routes/session.routes');
const userRouter=require('./routes/user.routes');

/// Configuration

mongoose
	.connect(process.env.DB_URI, { useNewUrlParser: true })
	.then(() => console.log('Connected to db.'))
	.catch((error) => console.log(`Error connecting to db: ${error.message}`));

/// Setup

// create express app
const app = express();

/// Middleware

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

/// Routes

app.get('/', (req, res) => {
	res.json({
		message: 'Anguconf. See you there!'
	});
});

app.use('/login',userRouter);
app.use('/sessions', sessionRouter);


app.use((request, response, next) => {
	next(createError(404, "Couldn't find the page you're looking for"));
});

/// Errors

app.use((error, request, response, next) => {
	const code = error.status || 500;
	response.status(code).json({
		error: {
			code: code,
			message: error.message
		}
	});
});

/// Boot app

// listen for requests
app.listen(1234, () => console.log('Server is listening on port 1234'));
