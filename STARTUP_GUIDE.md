# 🚀 Fullstack Application Startup Guide

## 📋 Prerequisites Check

Before starting the application, ensure you have:

- ✅ **Node.js v18+**: `node --version`
- ✅ **npm**: `npm --version`  
- ✅ **PostgreSQL 14**: Installed via Homebrew

## 🗄️ Step 1: Start Database Service

```bash
# Start PostgreSQL (if not already running)
brew services start postgresql@14

# Verify database is running
brew services list | grep postgresql
# Should show: postgresql@14 started

# Test database connection
export PATH="/opt/homebrew/opt/postgresql@14/bin:$PATH"
psql -d postgres -c "SELECT version();"
```

## ⚙️ Step 2: Start Backend Server

```bash
# Navigate to server directory
cd server

# Ensure environment variables are configured
cat .env
# Should show database configuration

# Add PostgreSQL to PATH and start backend
export PATH="/opt/homebrew/opt/postgresql@14/bin:$PATH"
npm run dev
```

**Backend Output Should Show:**
```
[nodemon] starting `ts-node src/index.ts`
Server is running on http://localhost:3001
Frontend should be accessible at http://localhost:5173
```

**Keep this terminal open!** Backend will run on **http://localhost:3001**

## 🎨 Step 3: Start Frontend Server (New Terminal)

Open a **new terminal window/tab** and run:

```bash
# Navigate to client directory
cd client

# Start frontend development server
npm run dev
```

**Frontend Output Should Show:**
```
VITE v4.5.3 ready in 516 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

**Keep this terminal open!** Frontend will run on **http://localhost:5173**

## 🌐 Step 4: Access Your Application

1. **Open your browser**
2. **Go to: http://localhost:5173**
3. **You should see:**
   - ✅ React app with title "Fullstack App: React + Express + PostgreSQL"
   - ✅ Green "Backend Connected!" message
   - ✅ Current database timestamp
   - ✅ Server information

## 🔧 Step 5: Verify Everything is Working

### Test Backend API Directly:
```bash
# In a third terminal window
curl http://localhost:3001/api
```

**Expected Response:**
```json
{
  "message": "Hello from the backend! Database connection successful.",
  "timestamp": "2025-01-20T15:30:45.123Z",
  "server": "Express + PostgreSQL"
}
```

### Check All Services:
```bash
# Check if all ports are in use
lsof -i :3001  # Backend
lsof -i :5173  # Frontend  
lsof -i :5432  # Database
```

## 🛑 How to Stop the Application

### Stop Development Servers:
```bash
# In each terminal running the servers, press:
Ctrl + C

# Or kill all at once:
pkill -f "npm run dev"
pkill -f "vite"
pkill -f "ts-node"
```

### Stop Database (Optional):
```bash
# Only if you want to completely stop PostgreSQL
brew services stop postgresql@14
```

## 📁 Project Structure Quick Reference

```
├── client/              # React Frontend (Port 5173)
│   ├── src/App.tsx     # Main component
│   └── package.json    # Frontend dependencies
├── server/              # Express Backend (Port 3001)  
│   ├── src/index.ts    # Main server file
│   ├── src/database.ts # Database connection
│   ├── .env            # Environment variables
│   └── package.json    # Backend dependencies
└── STARTUP_GUIDE.md    # This file
```

## 🚨 Troubleshooting

### Issue: Backend won't start
```bash
# Make sure you're in the server directory
cd server
export PATH="/opt/homebrew/opt/postgresql@14/bin:$PATH"
npm run dev
```

### Issue: Frontend shows Vite errors
```bash
# Make sure you're in the client directory  
cd client
npm run dev
```

### Issue: Database connection failed
```bash
# Check if PostgreSQL is running
brew services list | grep postgresql

# Start if needed
brew services start postgresql@14
```

### Issue: Port already in use
```bash
# Check what's using the ports
lsof -i :3001  # Backend port
lsof -i :5173  # Frontend port

# Kill processes if needed
pkill -f "npm run dev"
```

## 🎯 Quick Start Commands (All in One)

**Terminal 1 (Database + Backend):**
```bash
cd server
export PATH="/opt/homebrew/opt/postgresql@14/bin:$PATH"
brew services start postgresql@14
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd client  
npm run dev
```

**Browser:**
```
http://localhost:5173
```

---

## 🔗 Service URLs

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001/api
- **Database**: localhost:5432

**That's it! Your fullstack application should now be running! 🎉** 