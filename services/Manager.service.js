const RegistrationModel = require("../models/Registration.models");

class ManagerService {
	constructor() {}


	async getAllRegistrations() {
		return new Promise(async (resolve, reject) => {
		    try {
		        const response = await RegistrationModel.find().lean();
		        return resolve(response);
		    } catch (error) {
		        reject(error);
		    }
		})
	}

	/**
	 *
	 * @param {ObjectId} registrationId -- id of record of registration
	 */
	async allow(registrationId) {
		return new Promise(async (resolve, reject) => {
		    try {
				const response = await RegistrationModel.findByIdAndUpdate(registrationId, {allotted: true}, {new: true});
				return resolve(response);
		    } catch (error) {
		        reject(error);
		    }
		})
	}
}

module.exports = ManagerService;