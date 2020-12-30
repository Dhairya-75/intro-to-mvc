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

module.exports = {
    getIp,
    getBrowser,
    home
}