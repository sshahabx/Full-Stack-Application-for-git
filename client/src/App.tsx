import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface ApiResponse {
  message: string;
  timestamp: string;
  server: string;
}

function App() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3001/api');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result: ApiResponse = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Fullstack App: React + Express + PostgreSQL</h1>
      
      <div className="card">
        {loading ? (
          <div>
            <p>Loading data from backend...</p>
          </div>
        ) : error ? (
          <div>
            <h3 style={{ color: '#ff6b6b' }}>Error</h3>
            <p style={{ color: '#ff6b6b' }}>{error}</p>
            <p>Make sure the backend server is running on http://localhost:3001</p>
          </div>
        ) : data ? (
          <div>
            <h3 style={{ color: '#4CAF50' }}>✅ Backend Connected!</h3>
            <div style={{ textAlign: 'left', background: '#f5f5f5', padding: '1rem', borderRadius: '8px', margin: '1rem 0', color: 'black' }}>
              <p><strong>Message:</strong> {data.message}</p>
              <p><strong>Current Time:</strong> {new Date(data.timestamp).toLocaleString()}</p>
              <p><strong>Server:</strong> {data.server}</p>
            </div>
            <button 
              onClick={() => window.location.reload()} 
              style={{ marginTop: '1rem' }}
            >
              Refresh Data
            </button>
          </div>
        ) : null}
      </div>
      
      <p className="read-the-docs">
        The data above is fetched from your Express.js backend connected to PostgreSQL
      </p>
    </>
  )
}

export default App
