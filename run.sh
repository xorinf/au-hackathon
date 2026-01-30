#!/bin/bash

# Text Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Setting up RiskWise Environment...${NC}"

# 1. Setup Backend
echo -e "\n${BLUE}📦 Checking Backend...${NC}"
cd RiskWise/backend
if [ ! -d "node_modules" ]; then
    echo -e "${GREEN}Installing backend dependencies...${NC}"
    npm install --silent
fi
echo -e "${GREEN}Starting Backend Server...${NC}"
# Run backend in background and save PID
nohup node server.js > backend.log 2>&1 &
BACKEND_PID=$!
echo -e "Backend running (PID: $BACKEND_PID)"

# 2. Setup Frontend
echo -e "\n${BLUE}📦 Checking Frontend...${NC}"
cd ../frontend
if [ ! -d "node_modules" ]; then
    echo -e "${GREEN}Installing frontend dependencies...${NC}"
    npm install --silent
fi

echo -e "\n${GREEN}🌟 Starting Frontend...${NC}"
echo -e "Press Ctrl+C to stop both servers."
echo -e "-----------------------------------"

# Function to kill backend on exit
cleanup() {
    echo -e "\n${BLUE}🛑 Shutting down servers...${NC}"
    kill $BACKEND_PID
    exit
}

# Trap SIGINT (Ctrl+C)
trap cleanup SIGINT

# Run Frontend
npm run dev
