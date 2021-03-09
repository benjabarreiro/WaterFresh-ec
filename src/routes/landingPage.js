const express = require('express');
const router = express.Router();
const landingPageController = require('../controllers/landingPageController.js');

router.get('/display', landingPageController.landingPage);

router.post('/display', landingPageController.submit);

module.exports = router;