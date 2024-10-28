# Bank Management System

A small web application to implement **CRUD** operations for three financial models: **CreditCard**, **DebitCard**, and **Loan**, simulating a Bank Management System.

## Features

- Add, view, update, and delete Debit Cards, Credit Cards, and Loans.
- User authentication for secure access.
- Frontend with JavaScript framework: **React**
- Backend API with CRUD endpoints using **Django** and **Django REST Framework**
- Database: **PostgreSQL**
- Loan approval predictions using the OpenAI API.

## Requirements

- Node.js
- React
- Django REST Framework
- PostgreSQL

## Installation

1. Clone the repository:
```bash
git clone git@github.com:luismarrer/bank_management_system.git
```
2. Install dependencies:
```bash
cd bank_management_system
```
It is recommended to open two terminals: one for the backend and one for the frontend(client).
### client
```bash
cd client
npm install
```
### backend
It is recommended to use a virtual python environment.
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r ../requirements.txt
```
3. Configure your database connection:
- Make sure you have PostgreSQL installed. ([Official documentation for download and installation](https://www.postgresql.org/download/).)
- Create a PostgreSQL database.
- In the backend directory, create a .env file with the following structure:
```
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_PORT=5432
```
4. Apply database migrations:
```bash
python manage.py migrate # This is necessary to create the tables in the database.
```
5. Run the application:
### client
```bash
npm run dev
```
### backend
```bash
python manage.py runserver
```

## Usage
1. Open your browser and go to http://localhost:5173/ or the link provided in your terminal.
2. Register an account.
3. Request(create), view, update or delete a Credit Card, Debit Card or Loan.
