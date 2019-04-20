const mongoose = require('mongoose');

const SessionSchema = mongoose.Schema(
	{
		name: String,
		time: Date
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Session', SessionSchema);
