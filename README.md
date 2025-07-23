# Fullstack Web Application

A fullstack web application built with React + TypeScript (frontend), Express.js (backend), and PostgreSQL (database).

## Project Structure

```
├── client/          # React + TypeScript frontend (Vite)
│   ├── src/
│   │   ├── App.tsx  # Main component that fetches data from backend
│   │   └── ...
│   └── package.json
├── server/          # Express.js backend
│   ├── src/
│   │   ├── index.ts     # Main server file
│   │   └── database.ts  # Database connection utility
│   ├── .env         # Environment variables (configure your DB)
│   ├── .env.example # Environment template
│   └── package.json
└── README.md        # This file
```

## Features

- **Frontend**: React + TypeScript with Vite dev server
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL connection with connection pooling
- **API**: REST endpoint `/api` that returns current timestamp from database
- **CORS**: Properly configured for frontend-backend communication
- **Environment Variables**: Secure configuration management

## Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL database running locally
- npm or yarn package manager

## Setup Instructions

### 1. Database Setup

Make sure you have PostgreSQL installed and running locally. Create a database (or use the default `postgres` database).

### 2. Backend Setup

```bash
cd server

# Install dependencies
npm install

# Configure environment variables
# Edit the .env file with your PostgreSQL credentials
cp .env.example .env
# Update DB_PASSWORD and other settings as needed

# Run the development server
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd client

# Install dependencies (if not already done)
npm install

# Run the development server
npm run dev
```

The frontend will run on `http://localhost:5173`

## Environment Variables

Configure the following variables in `server/.env`:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=your_password_here

# Server Configuration
PORT=5000
FRONTEND_URL=http://localhost:5173

# Environment
NODE_ENV=development
```

## API Endpoints

### GET `/api`
Returns current timestamp from PostgreSQL database along with a success message.

**Response Example:**
```json
{
  "message": "Hello from the backend! Database connection successful.",
  "timestamp": "2024-01-20T15:30:45.123Z",
  "server": "Express + PostgreSQL"
}
```

### GET `/health`
Health check endpoint to verify server status.

## Running the Application

1. Start PostgreSQL database
2. Start the backend server: `cd server && npm run dev`
3. Start the frontend server: `cd client && npm run dev`
4. Open your browser to `http://localhost:5173`

You should see the frontend successfully fetch and display data from the backend, including the current database timestamp.

## Development

- Backend uses `nodemon` and `ts-node` for hot reloading during development
- Frontend uses Vite's hot module replacement for instant updates
- TypeScript is configured for both frontend and backend
- CORS is configured to allow requests between frontend and backend

## Troubleshooting

- **Database connection errors**: Check your PostgreSQL service is running and credentials in `.env` are correct
- **CORS errors**: Ensure the backend is running on port 5000 and frontend on 5173
- **Port conflicts**: You can change ports in the respective configuration files 