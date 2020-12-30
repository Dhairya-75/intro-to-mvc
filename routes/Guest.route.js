const router = require('express').Router();
const GuestController = require("../controllers/Guest.controller");

router.get('/', GuestController.home);

router.get('/ip', GuestController.getIp);

router.get('/browser', GuestController.getBrowser);

router.post('/register', GuestController.register);

router.get('/status/:registrationId', GuestController.status)

module.exports = router;
