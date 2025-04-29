# Project Setup Guide

This guide explains how to set up and run both the Backend (BE) and Frontend (FE) of the project.

---

## Prerequisites

Before running the project, make sure you have installed:

- **Python 3.8+**
- **Node.js** and **npm**
- Python packages: `uvicorn`, `fastapi`
- Frontend packages (installed via `npm install`)

---

## Backend (BE)

1. Open a terminal.
2. Navigate to the Backend directory:
   ```bash
   cd BE_CNPM
   ```
3. Run the backend server:
   ```bash
  uvicorn app.main:app --reload 
   ```

The backend server will start at:  
`http://127.0.0.1:8000`

---

## Frontend (FE)

1. Open a new terminal or new tab.
2. Navigate to the Frontend directory:
   ```bash
   cd FE
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```

The frontend will start at:  
➡️ `http://localhost:5173`  
(or another port if 5173 is already occupied)
