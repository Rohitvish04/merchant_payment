const Transaction = require('../models/Transaction');

const createPayment = async (req, res) => {
  const { amount } = req.body;
  const userId = req.user.id;
  try {
    const transaction = await Transaction.create({ amount, userId });
    res.status(201).json({ message: 'Payment created successfully', transaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTransactions = async (req, res) => {
  const userId = req.user.id;
  try {
    const transactions = await Transaction.findAll({ where: { userId } });
    res.status(200).json({ transactions });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createPayment, getTransactions };