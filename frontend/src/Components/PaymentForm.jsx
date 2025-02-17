import React, { useState } from 'react';
import api from '../services/api';

const PaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.createPayment({ amount: parseFloat(amount) });
      console.log('Payment created:', response);
      setSuccess('Payment created successfully!');
      setError('');
      setAmount(''); // Clear the input field
    } catch (error) {
      setError('Failed to create payment. Please try again.');
      setSuccess('');
      console.error('Failed to create payment:', error);
    }
  };

  return (
    <div>
      <h2>Create Payment</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      {success && <p style={{ color: 'green' }}>{success}</p>} {/* Display success message */}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Create Payment</button>
      </form>
    </div>
  );
};

export default PaymentForm;