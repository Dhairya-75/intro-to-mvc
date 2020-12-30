const router = require('express').Router();
const GuestController = require("../controllers/Guest.controller");

router.get('/', GuestController.home);

router.get('/ip', GuestController.getIp);

router.get('/browser', GuestController.getBrowser);

module.exports = router;
