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
const ApiError = require('./models/error.model');

// Route dependencies
const sessionRouter = require('./routes/session.routes');

/// Configuration

mongoose
	.connect(process.env.DB_URI, { useNewUrlParser: true })
	.then(() => console.log('Connected to db.'))
	.catch((error) => console.log(`Error connecting to db: ${error.message}`));

const appLogStream = fs.createWriteStream(path.join(__dirname, 'app.log'), { flags: 'a' });

/// Setup

// create express app
const app = express();

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

app.use('/api/sessions', sessionRouter);

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
