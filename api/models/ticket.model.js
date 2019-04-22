const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
	fullName: {
		type: String,
		unique: true,
		required: "Full name can't be empty"
	},
	quantity: Number,
	email: {
		type: String,
		required: "Email can't be empty",
		unique: true
	},
	amount: Number,
	payment: {
		cardNo: Number,
		cardType: String
	}
});
ticketSchema.set('toJSON', { virtuals: true });
// validation for email
ticketSchema.path('email').validate((val) => {
	emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailRegex.test(val);
}, 'Invalid e-mail.');

module.exports = mongoose.model('Ticket', ticketSchema);
