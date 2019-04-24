const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	role:{ type: String, enum: ['admin', 'user'], default: 'user' }
});

userSchema.pre('save', function(next) {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(this.password, salt, (err, hash) => {
			this.password = hash;
			this.saltSecret = salt;
			next();
		});
	});
});

userSchema.methods.verifyPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

userSchema.set('toJSON', { virtuals: true });
// validation for email
userSchema.path('email').validate((val) => {
	emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailRegex.test(val);
}, 'Invalid e-mail.');

module.exports = mongoose.model('User', userSchema);
