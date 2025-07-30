# Ralla Water Purifiers

A full-stack application for Ralla Water Purifiers.

## Project Structure

- Frontend: React application in root directory
- Backend: Express.js API in `/backend` directory

## Backend Deployment (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the following environment variables:
   - `PORT`: 5000
   - `NODE_ENV`: production
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `FRONTEND_URL`: Your Vercel frontend URL (to be configured after frontend deployment)

4. Build Command: `npm install`
5. Start Command: `npm start`

## Frontend Deployment (Vercel)

1. Create a new project on Vercel
2. Connect your GitHub repository
3. Set the following environment variables:
   - `VITE_API_URL`: Your Render backend URL (to be configured after backend deployment)

## Local Development

1. Backend:
   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. Frontend:
   ```bash
   npm install
   npm run dev
   ```
