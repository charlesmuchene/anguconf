require('dotenv').config({ debug: process.env.DEBUG });
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose
	.connect(process.env.DB_URI, { useNewUrlParser: true })
	.then(() => console.log('Connected to db.'))
	.catch((error) => console.log(`Error connecting to db: ${error.message}`));

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a index route
app.get('/', (req, res) => {
	res.json({
		message: 'Anguconf. See you there!'
	});
});

// listen for requests
app.listen(1234, () => {
	console.log('Server is listening on port 1234');
});
