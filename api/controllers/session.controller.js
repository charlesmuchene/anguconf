const Session = require('../models/session.model');

// Create and save a new note
exports.create = (request, response) => {
	const title = request.body.title;
	const content = request.body.content;

	const session = new Session({
		title,
		content
	});

	session.save().then((data) => response.json(data)).catch((error) =>
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
	Session.find()
		.then((sessions) => {
			response.json(sessions);
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
