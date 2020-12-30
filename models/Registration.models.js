const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	roomNo: {
		type: Number,
		required: true
	},
	allotted: {
		type: Boolean,
		default: false
	}

}, {strict: false, timestamps: {createdAt: "creation", updatedAt: "updatedAt"}})

module.exports = mongoose.model("RegistrationModel", RegistrationSchema, "registrations");