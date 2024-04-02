const express = require('express');
const router = express.Router();

// Auth routes
const registerRouter = require('/auth/register');
const loginRouter = require('/auth/login');

// Mount auth routes
router.use('/auth/register', registerRouter);
router.use('/auth/login', loginRouter);

module.exports = router;
