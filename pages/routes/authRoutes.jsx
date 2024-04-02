const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController');

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password/:resetToken', authController.resetPassword);
router.post('/google-login', authController.googleLogin);
router.post('/facebook-login', authController.facebookLogin);

module.exports = router;
