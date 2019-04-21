/// Dependencies

// Modules
require('dotenv').config({ debug: process.env.DEBUG });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const morgan= require('morgan');
const cors= require('cors');

// create express app
const app = express();

app.use((req,res,next)=>{
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Allow-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

	if( req.method==="OPTIONS"){
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH,DELETE,GET');
		return res.status(200).json({});
	}
	next();
})

// Routes
const sessionRouter = require('./routes/session.routes');
const ticketRouter = require('./routes/ticket.routes'	);
/// Configuration

mongoose
	.connect(process.env.DB_URI, { useNewUrlParser: true })
	.then(() => console.log('Connected to db.'))
	.catch((error) => console.log(`Error connecting to db: ${error.message}`));

/// Setup



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

app.use(morgan('dev'));
app.use('/sessions', sessionRouter);
app.use('/tickets', ticketRouter);

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
