const express = require('express');
const bodyParser = require('body-parser');

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
