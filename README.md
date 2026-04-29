# Task Management App (MERN Stack)

## Project Description

- This project is a task management application.
- It helps users to create, update and delete tasks.
- It is built using MERN stack (MongoDB, Express, React, Node.js ).

## Tech Stack

- MongoDB
- Express.js
- React.js
- Node.js
- Axios
- JWT
- Bootstrap

## Core Features

- User Authentication
- Role-Based Access Control
- Task CRUD Operations
- Admin User Management
- Filtering, Sorting, Pagination
- Protected Routes

## Roles & Permissions

| Feature          | User | Admin |
| ---------------- | ---- | ----- |
| View Tasks       | ✓    | ✓     |
| Create Tasks     | ✓    | ✓     |
| Edit Own Tasks   | ✓    | ✓     |
| Delete Own Tasks | ✓    | ✓     |
| Manage Users     | ✗    | ✓     |

## Folder Structure

```
task-manager-mern/
├── backend/
├── frontend/
└── README.md

```

## Backend Setup

```
cd backend
npm install

# Create .env file
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key

npm start

# Backend runs on
http://localhost:5000

```

## Frontend Setup

```
cd frontend
npm install

# Create .env file
REACT_APP_API_URL=http://localhost:5000

npm start

# Frontend runs on
http://localhost:3000

```

## Authentication Flow

1. User logs in
2. Backend checks details
3. JWT token is created
4. Token sent to frontend
5. Stored in localStorage
6. Used for protected routes

## API Overview

### Auth

- POST /auth/register
- POST /auth/login

### Tasks

- GET /tasks
- POST /tasks
- GET /tasks/:id
- PUT /tasks/:id
- DELETE /tasks/:id

### Users

- GET /users
- POST /users
- PUT /users/:id
- DELETE /users/:id

## Creating First Admin

1. Register a user
2. Open MongoDB
3. Change role to "admin"

## Future Enhancements

- Notifications
- File Uploads
- Real-time updates
