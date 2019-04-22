/// Dependencies

// Modules
require('dotenv').config({ debug: process.env.DEBUG });
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const createError = require('http-errors');
<<<<<<< HEAD
const morgan= require('morgan');
const cors= require('cors');

// create express app
const app = express();
=======
const ApiError = require('./models/error.model');
>>>>>>> master

// Route dependencies
const sessionRouter = require('./routes/session.routes');
<<<<<<< HEAD
const ticketRouter = require('./routes/ticket.routes'	);
=======
const userRouter = require('./routes/user.routes');

/// Setup

// create express app
const app = express();

>>>>>>> master
/// Configuration

mongoose
	.connect(process.env.DB_URI, { useNewUrlParser: true })
	.then(() => console.log('Connected to db...'))
	.catch((error) => console.log(`Error connecting to db: ${error.message}`));

const appLogStream = fs.createWriteStream(path.join(__dirname, 'app.log'), { flags: 'a' });


app.disable('x-powered-by');
app.enable('strict routing');
app.enable('case sensitive routing');

/// Middleware

// logger
app.use(morgan('combined', { stream: appLogStream }));
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

<<<<<<< HEAD
app.use(morgan('dev'));
app.use('api/sessions', sessionRouter);
app.use('api/tickets', ticketRouter);
=======
app.use('api/sessions', sessionRouter);
app.use('api/login', userRouter);
>>>>>>> master

app.use((request, response, next) => {
	next(createError(404, "Couldn't find the page you're looking for"));
});

/// Errors

app.use((error, request, response, next) => {
	const code = error.status || 500;
	response.status(code).json(new ApiError(code, error.message || 'Unknown server error'));
});

/// Boot app

// listen for requests
app.listen(1234, () => console.log('Server is listening on port 1234'));
