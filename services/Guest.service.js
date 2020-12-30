const RegistrationModel = require('../models/Registration.models');

class GuestService {
	constructor() {}

	/**
	 *
	 * @param {string} name -- Guest Name
	 * @param {number} roomNo -- Room Number
	 */
	async register(name, roomNo) {
		return new Promise(async (resolve, reject) => {
		    try {
				 const regModel = new RegistrationModel({name, roomNo});
				 const response = await regModel.save();
				 if (response) {
				 	return resolve(response);
 				 } else {
				 	return reject(new Error("Something went wrong while storing record"))
				 }
		    } catch (error) {
		        reject(error);
		    }
		})
	}

	/**
	 *
	 * @param {ObjectId} registrationId -- reg id given by register()
	 * @returns {Promise<void>}
	 */
	async getStatus(registrationId) {
		return new Promise(async (resolve, reject) => {
		    try {
		        const response = await RegistrationModel.findById(registrationId, {allotted: 1}).lean();
			    if (response) {
				    return resolve(response);
			    } else {
				    return reject(new Error("Something went wrong while storing record"))
			    }
		    } catch (error) {
		        reject(error);
		    }
		})
	}
}

module.exports = GuestService;