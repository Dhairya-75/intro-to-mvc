const ManagerService = require("../services/Manager.service");
const managerService = new ManagerService();

const home = async (req, res, next) => {
    try {
    	res.json({message: "Welcome Manager! Lets add some more routes"})
    } catch (error) {
        next(error);
    }
}

const allRegistrations = async (req, res, next) => {
	try {
	    const response = await managerService.getAllRegistrations();
	    return res.json({data: response})
	} catch (error) {
	    next(error);
	}
}

const allow = async (req, res, next) => {
	try {
		const {registrationId} = req.params;
		const response = await managerService.allow(registrationId);
		return res.json({data: response})
	} catch (error) {
		next(error);
	}
}

const deleteEntry = async (req, res, next) => {
	try {
		const {registrationId} = req.params;
		const response = await managerService.deleteEntry(registrationId);
		return res.json({data: response})
	} catch (error) {
		next(error);
	}
}


module.exports = {
	home,
	allRegistrations,
	allow,
	deleteEntry
}