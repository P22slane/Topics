var mongoose = require('mongoose');
var Schema	 = mongoose.Schema;

var CurriculaSchema = Schema({
	title: String,
	title_box: String,
	thesis_type_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Thesis_type'},
	short: String
});

module.exports = mongoose.model('Curricula',CurriculaSchema);

//{ type: mongoose.Schema.Types.ObjectId, ref: 'Thesis_type'}