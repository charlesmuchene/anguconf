const Ticket = require('../models/ticket.model');

// Create and save a new ticket
exports.create = (request, response) => {
	const ticket = new Ticket(request.body);

	ticket
		.save()
		.then((data) => {
			response.json(data);
		})
		.catch((error) =>
			response.status(500).json({
				error : {
					code    : 500,
					message : error.message || 'Error while creating a ticket'
				}
			})
		);
};

// Retrieve and return all tickets
exports.findAll = (request, response) => {
	Ticket.find()
		.exec()
		.then((ticket) => {
			response.json(ticket);
		})
		.catch((error) =>
			response.status(500).json({
				error : {
					code    : 500,
					message : error.message || 'Error retrieving tickets'
				}
			})
		);
};

//Retrieve and return one ticket related to the id
exports.findOne = (request, response) => {
	const tid = request.params.ticketId;
	Ticket.findById(tid)
		.then((ticket) => {
			response.json(ticket);
		})
		.catch((error) =>
			response.status(500).json({
				error : {
					code    : 500,
					message : error.message || 'Error retrieving ticket'
				}
			})
		);
};

//Updating ticket
exports.update = (request, response) => {
	const tid = request.params.ticketId;
	Ticket.findByIdAndUpdate(tid, request.body, { new: true })
		.then((ticket) => {
			response.status(200).json(ticket);
		})
		.catch((error) =>
			response.status(500).json({
				error : {
					code    : 500,
					message : error.message || 'Error retrieving ticket'
				}
			})
		);
};

//Deleting a ticket
exports.delete = (request, response) => {
	const tid = request.params.ticketId;
	Ticket.findByIdAndRemove(tid)
		.then((ticket) => {
			response.status(200).json('Ticket deleted successfully');
		})
		.catch((error) =>
			response.status(500).json({
				error : {
					code    : 500,
					message : error.message || 'Error deleting ticket'
				}
			})
		);
};
