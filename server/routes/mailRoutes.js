const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controllers/mailControllers');

// Route for sending email
router.post('/send-email', sendEmail);

module.exports = router;
