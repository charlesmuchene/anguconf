const Session = require('../models/session.model');
const ApiError = require('../models/error.model');

// Retrieve and return all sessions
exports.findAll = (request, response) => {
	Session.find()
		.then((sessions) => response.json(sessions))
		.catch((error) => response.status(500).json(new ApiError(500, error.message || 'Error retrieving sessions')));
};

exports.findOne = (request, response) => {
	const sessionId = request.params.sessionId;
	Session.findById(sessionId)
		.then((session) => {
			if (session) response.json(session);
			else response.status(404).json(new ApiError(404, `Session with id ${sessionId} not found`));
		})
		.catch((error) => {
			if (error.kind === 'ObjectId')
				response.status(404).json(new ApiError(404, `Session with id ${sessionId} not found`));
			else response.status(500).json(new ApiError(500, `Error retrieving session with id ${sessionId}`));
		});
};

// Create and save a new note
exports.create = (request, response) => {
	const session = new Session(request.body);

	session
		.save()
		.then((data) => response.json(data))
		.catch((error) =>
			response.status(500).json(new ApiError(500, error.message || 'Error while creating a session'))
		);
};

// Update a session with given id
exports.update = (request, response) => {
	const sessionId = request.params.sessionId;
	Session.findByIdAndUpdate(sessionId, request.body, { new: true } /* return updated object */)
		.then((session) => {
			if (session) response.json(session);
			else response.status(404).json(new ApiError(404, `Session with id ${sessionId} not found`));
		})
		.catch((error) => {
			if (error.kind === 'ObjectId')
				response.status(404).json(new ApiError(404, `Session with id ${sessionId} not found`));
			else response.status(500).json(new ApiError(500, `Error updating session with id ${sessionId}`));
		});
};

// Delete session with given id
exports.delete = (request, response) => {
	const sessionId = request.params.sessionId;
	Session.findByIdAndDelete(sessionId)
		.then((session) => {
			if (session) response.json({ message: 'Session deleted successfully!' });
			else response.status(404).json(new ApiError(404, `Session with id ${sessionId} not found`));
		})
		.catch((error) => {
			if (error.kind === 'ObjectId')
				response.status(404).json(new ApiError(404, `Session with id ${sessionId} not found`));
			else response.status(500).json(new ApiError(500, `Error deleting session with id ${sessionId}`));
		});
};
