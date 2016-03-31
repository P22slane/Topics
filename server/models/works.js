var mongoose = require('mongoose');
var Schema 	 =mongoose.Schema;

var WorkSchema = Schema({
	_id: String,
	title: String,
	teacher_id: String,
	teacher_first: String,
	teacher_last: String,
	curricula: String,
	student: String,
	student_meil: String,
	student_phone: String,
	status_id: String,
	taken_date: String,
	presented_date: String,
	special_cond: String,
	descriptsion: String,
	file: String
});

module.exports = mongoose.model('Work', WorkSchema, 'work');