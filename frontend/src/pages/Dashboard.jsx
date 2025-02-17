import React, { useEffect, useState } from 'react';
import api from '../services/api';
import PaymentForm from '../Components/PaymentForm  ';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await api.getTransactions();
        setTransactions(response.transactions);
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Your Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            Amount: ${transaction.amount} | Status: {transaction.status}
          </li>
        ))}
      </ul>
      <PaymentForm /> {/* Add the PaymentForm component here */}
    </div>
  );
};

export default Dashboard;