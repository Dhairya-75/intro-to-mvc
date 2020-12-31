const router = require('express').Router();
const ManagerController = require("../controllers/Manager.controller");

router.get('/', ManagerController.home);

router.get('/registrations', ManagerController.allRegistrations);

router.patch('/allow/:registrationId', ManagerController.allow)

module.exports = router;
