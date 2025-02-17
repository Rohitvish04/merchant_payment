import axios from 'axios';

const API_URL = 'http://localhost:5000/api';
 //connectivty ka issu to nhi hai na pata nhi bro lekin backend sahi hai frontend response nahi aa rhha  isko use kaha kiya hai

 //http://localhost:5000/api/auth/register
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};

const login = async (userData) => {
  
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token); // Save token
  }
  return response.data;
};

const createPayment = async (paymentData) => {
  const token = localStorage.getItem('token'); // Get the token from localStorage
  const response = await axios.post(`${API_URL}/payments/create`, paymentData, {
    headers: { Authorization: `Bearer ${token}` }, // Include the token in the request headers
  });
  return response.data;
};

const getTransactions = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/payments/transactions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default { register, login, createPayment, getTransactions };