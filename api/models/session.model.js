const mongoose = require('mongoose');

const SessionSchema = mongoose.Schema(
	{
		title: {
			min: 3,
			type: String,
			required: [ true, 'Session title cannot be empty' ]
		},
		content: {
			type: String,
			required: [ true, 'Session content cannot be empty' ]
		},
		time: {
			type: Date,
			required: [ true, 'Session data cannot be empty' ]
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Session', SessionSchema);