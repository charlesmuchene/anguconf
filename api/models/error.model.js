class ApiError {
	constructor(code, message) {
		this.error = {
			code,
			message
		};
	}
}

module.exports = ApiError;
