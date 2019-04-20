const Ticket = require('../models/ticket.model');

// Create and save a new note
exports.create = (request, response) => {
	const fullName = request.body.fullName;
    const quantity = request.body.quantity;
    const email=reques.body.email;
    const amount= request.body.amount;
    const payment=request.body.payment;

	const ticket = new Ticket({
		fullName,
        quantity,
        email,
        amount,
        payment
	});

	ticket.save().then((data) => response.json(data)).catch((error) =>
		response.status(500).json({
			error: {
				code: 500,
				message: error.message || 'Error while creating a session'
			}
		})
	);
};

// Retrieve and return all sessions
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
