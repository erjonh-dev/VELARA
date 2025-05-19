const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  createRequest,
  getUserRequests,
} = require('../controllers/requestController');


router.post(
  '/',
  auth,
  [
    check('type', 'Type is required').not().isEmpty(),
    check('description', 'Description must be at least 5 characters long').isLength({ min: 5 }),
  ],
  createRequest
);


router.get('/', auth, getUserRequests);

module.exports = router;
