const router = require('express').Router();
const ManagerController = require("../controllers/Manager.controller");

router.get('/', ManagerController.home);

module.exports = router;
