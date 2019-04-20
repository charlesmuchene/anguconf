const Ticket = require('../models/ticket.model');

// Create and save a new ticket
exports.create = (request, response) => {
	const ticket= new Ticket();
	ticket.fullName = request.body.fullName,
     ticket.quantity = request.body.quantity;
     ticket.email=request.body.email;
    ticket.amount= request.body.amount;
    ticket.payment=request.body.payment;

	ticket.save().then((data) => response.json(data)).catch((error) =>
		response.status(500).json({
			error: {
				code: 500,
				message: error.message || 'Error while creating a session'
			}
		})
	);
};

// Retrieve and return all tickets
exports.findAll = (request, response) => {
	Ticket.find()
		.then((ticket) => {
			response.json(ticket);
		})
		.catch((error) =>
			response.status(500).json({
				error: {
					code: 500,
					message: error.message || 'Error retrieving sessions'
				}
			})
		);
};

//Retrieve and return one ticket related to the id
exports.findOne = (request, response) => {
	const id= request.params.id;
	Ticket.findOne({id})
		.then((ticket) => {
			response.json(ticket);
		})
		.catch((error) =>
			response.status(500).json({
				error: {
					code: 500,
					message: error.message || 'Error retrieving sessions'
				}
			})
		);
};