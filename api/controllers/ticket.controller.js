const Ticket = require('../models/ticket.model.js');

// Create and save a new ticket
exports.create = (request, response) => {
	// const ticket= new Ticket();
	const fullName = request.body.fullName;
    const quantity = request.body.quantity;
	const email=request.body.email;
    const amount= request.body.amount;
	const payment=request.body.payment;
	const ticket=new Ticket({
     fullName, quantity, email,amount, payment
	})

	ticket.save().then((data) => response.json(data)).catch((error) =>
		response.status(500).json({
			error: {
				code: 500,
				message: error.message || 'Error while creating a ticket'
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
	console.log(id)
	Ticket.findOne(id)
		.then((ticket) => {
			response.json(ticket);
		})
		.catch((error) =>
			response.status(500).json({
				error: {
					code: 500,
					message: error.message || 'Error retrieving ticket'
				}
			})
		);
};