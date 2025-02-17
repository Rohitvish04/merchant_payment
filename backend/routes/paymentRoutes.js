const express = require('express');
const { createPayment, getTransactions } = require('../controllers/paymentController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, createPayment);
router.get('/transactions', authMiddleware, getTransactions);

module.exports = router;