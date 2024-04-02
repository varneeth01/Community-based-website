import { NextApiRequest, NextApiResponse } from 'next';  
import express from 'express';
const router = express.Router();
const authController = require('./controllers/authController'); // Adjust the path according to your file structure

// @route   POST api/auth/login
// @desc    Login user
router.post('/', async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await authController.login(req, res);
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
