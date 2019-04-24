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
		date: {
			type: Date,
			required: [ true, 'Session time cannot be empty' ]
		},
		attendingTitle: {
			type: String,
			default: 'Not attending'
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Session', SessionSchema);
