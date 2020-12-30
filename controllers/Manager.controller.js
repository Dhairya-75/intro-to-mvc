const home = async (req, res, next) => {
    try {
    	res.json({message: "Welcome Manager! Lets add some more routes"})
    } catch (error) {
        next(error);
    }
}

module.exports = {
	home
}