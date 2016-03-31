var mongoose = require('mongoose');
var Schema	 = mongoose.Schema;

var ThesisTypeSchema = Schema({
	title: String
});

module.exports = mongoose.model('ThesisType', ThesisTypeSchema, 'thesis_type');