const GuestService = require("../services/Guest.service");
const guestService = new GuestService();
const getIp = async (req, res, next) => {
    try {
        const ip = req.connection.remoteAddress;
        res.json({message: "Your IP address is: " + ip});
    } catch (error) {
        next(error);
    }
}

const getBrowser = async (req, res, next) => {
    const userAgent = req.headers["user-agent"];
    res.json({message: "Your browser is: " + userAgent})
}

const home = async (req, res, next) => {
    res.json({message: "Welcome to my server"});
}

// register a room
const register = async (req, res, next) => {
    try {
        const {name, roomNo} = req.body;
        // code to add entry to database
        const response = await guestService.register(name, roomNo);
        res.json({data: response});
    } catch (error) {
        next(error);
    }
}

// get status of registration
const status = async (req, res, next) => {
    try {
        const {registrationId} = req.params;
        const response = await guestService.getStatus(registrationId)
        res.json({data: response})
    } catch (error) {
        next(error);
    }
}



module.exports = {
    getIp,
    getBrowser,
    home,
    register,
    status,
}