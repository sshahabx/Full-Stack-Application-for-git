import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { query } from './database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Vite's default port
  credentials: true
}));
app.use(express.json());

// Test database connection and return current timestamp
app.get('/api', async (req, res) => {
  try {
    const result = await query('SELECT NOW() as current_time');
    const timestamp = result.rows[0].current_time;
    
    res.json({
      message: 'Hello from the backend! Database connection successful.',
      timestamp: timestamp,
      server: 'Express + PostgreSQL'
    });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({
      error: 'Failed to connect to database',
      message: 'Please check your database configuration'
    });
  }
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Frontend should be accessible at ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
}); 