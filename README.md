# Merchant Payment System

A full-stack web application that allows merchants to register, log in, create payment links, and view transaction history. Built with **Node.js** (backend), **PostgreSQL** (database), and **React.js** (frontend).

---

## **Features**

- **User Authentication**:
  - Register and log in as a merchant.
  - Secure password storage using bcrypt.
  - JWT-based authentication for protected routes.

- **Payment Management**:
  - Create payment links for customers.
  - View transaction history.

- **Dashboard**:
  - Display a list of transactions.
  - Create new payments.

---

## **Tech Stack**

- **Frontend**:
  - React.js
  - Vite (for fast development)
  - Axios (for API requests)
  - React Router (for routing)

- **Backend**:
  - Node.js
  - Express.js
  - PostgreSQL (database)
  - Sequelize (ORM)
  - JSON Web Tokens (JWT) for authentication

- **Tools**:
  - Postman (for API testing)
  - Git (for version control)

---

## **Setup Instructions**

### **1. Clone the Repository**

```bash
git clone https://github.com/your-username/merchant_payment.git
cd merchant_payment


2. Backend Setup
Navigate to the backend folder:

bash
Copy
cd backend
Install dependencies:

bash
Copy
npm install
Set up the database:

Create a PostgreSQL database named merchant_payment.

Update the .env file with your database credentials:

env
Copy
DB_NAME=merchant_payment
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
Run database migrations:

bash
Copy
npx sequelize-cli db:migrate
Start the backend server:

bash
Copy
node server.js
The backend will run on http://localhost:5000.

3. Frontend Setup
Navigate to the frontend folder:

bash
Copy
cd ../frontend
Install dependencies:

bash
Copy
npm install
Start the frontend development server:

bash
Copy
npm run dev
The frontend will run on http://localhost:5173.

API Endpoints
Authentication
Register: POST /api/auth/register

json
Copy
{
  "email": "test@example.com",
  "password": "password123"
}
Login: POST /api/auth/login

json
Copy
{
  "email": "test@example.com",
  "password": "password123"
}
Payments
Create Payment: POST /api/payments/create

json
Copy
{
  "amount": 100.50
}
Get Transactions: GET /api/payments/transactions

Folder Structure
Copy
merchant-payment-system/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── database/
│   └── migrations/
└── README.md
Usage
Register:

Go to the /register page and create a new account.

Login:

Go to the /login page and log in with your credentials.

Dashboard:

After logging in, you will be redirected to the /dashboard page.

View your transactions and create new payments.
