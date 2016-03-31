var mongoose = require('mongoose');
var Schema 	 =mongoose.Schema;

var AccountSchema = Schema({
	_id: String,
	account_types_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Account_type'},
	course_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Course'},
	email: String,
	password: String,
	firstname: String,
	lastname: String,
	info: String,
	phone: String,
	room: String,
	consultation: String,
	tag: String
});

module.exports = mongoose.model('Account',	AccountSchema, 'account');