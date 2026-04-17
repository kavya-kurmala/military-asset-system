# Military Asset Management System

## 📌 Overview

This project is a Military Asset Management System designed to track and manage assets such as vehicles, weapons, and ammunition across multiple bases. It provides visibility into asset movements, ensures accountability, and supports role-based access control.

---

## 🚀 Features

### Dashboard

* Displays key metrics:

  * Opening Balance
  * Closing Balance
  * Net Movement (Purchases + Transfer In - Transfer Out)
  * Assigned and Expended assets
* Dynamic updates based on user role and base
* Interactive UI with modern design

### Purchases

* Record asset purchases for specific bases
* View purchase history

### Transfers

* Transfer assets between bases
* Maintain transfer history with timestamps

### Assignments & Expenditures

* Assign assets to personnel
* Track expended assets

### Role-Based Access Control (RBAC)

* **Admin**: Full access
* **Commander**: Access limited to assigned base
* **Logistics Officer**: Access to purchases and transfers

### Logging

* All API actions are logged in the database for auditing

---

## 🛠 Tech Stack

### Frontend

* React (for UI)
* Axios (for API calls)

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL (relational database for structured data)

---

## 📂 Project Structure

```
military-asset-system/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   └── index.js
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-link>
cd military-asset-system
```

---

### 2. Setup Backend

```
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
DATABASE_URL=your_postgresql_connection_string
```

Start backend:

```
node server.js
```

---

### 3. Setup Database (PostgreSQL)

Create tables:

```sql
CREATE TABLE assets (
  id SERIAL PRIMARY KEY,
  base TEXT,
  equipment_type TEXT,
  purchases INT DEFAULT 0,
  transfer_in INT DEFAULT 0,
  transfer_out INT DEFAULT 0,
  assigned INT DEFAULT 0,
  expended INT DEFAULT 0
);

CREATE TABLE logs (
  id SERIAL PRIMARY KEY,
  action TEXT,
  details TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 4. Setup Frontend

```
cd frontend
npm install
npm start
```

Open:

```
http://localhost:3000
```

---

## 🔐 API Usage

### Dashboard API

```
GET /api/dashboard
```

Headers:

```
role: admin | commander | logistics
base: base1 | base2
```

---

## 🎯 Key Highlights

* Real-time dashboard updates
* Role-based data filtering
* Clean and modern UI
* Scalable backend architecture
* Secure and auditable system

---

## 📌 Conclusion

This system provides a simple and effective way to manage military assets with proper tracking, transparency, and access control. It can be further extended with advanced analytics, charts, and authentication.

---
