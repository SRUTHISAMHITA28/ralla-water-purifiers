# Ralla Water Purifiers Backend

This is the backend API for the Ralla Water Purifiers website, built with Node.js, Express, and MongoDB.

## Features

- RESTful API endpoints for products
- Contact form submission handling
- User authentication and authorization
- Admin dashboard for managing products and contact messages
- MongoDB database integration
- CORS configuration for frontend integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following variables:
   ```
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/ralla-water-purifiers
   JWT_SECRET=your_jwt_secret_key_here
   FRONTEND_URL=http://localhost:5173
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Products

- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get single product
- POST `/api/products` - Create new product (admin only)
- PUT `/api/products/:id` - Update product (admin only)
- DELETE `/api/products/:id` - Delete product (admin only)

### Contact

- POST `/api/contact` - Submit contact form
- GET `/api/contact` - Get all contact messages (admin only)
- GET `/api/contact/:id` - Get single contact message (admin only)
- DELETE `/api/contact/:id` - Delete contact message (admin only)

### Users

- POST `/api/users/register` - Register new user
- POST `/api/users/login` - Login user
- GET `/api/users/profile` - Get user profile (protected)
- PUT `/api/users/profile` - Update user profile (protected)

## Deployment

### Backend

1. Railway
2. Render
3. Heroku
4. DigitalOcean

### Frontend

1. Netlify
2. Vercel
3. GitHub Pages

## Seeding Database

To seed the database with initial products:

```bash
npm run seed
```

## Environment Variables

- `PORT` - Port number for the server
- `NODE_ENV` - Environment mode (development/production)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT secret key for authentication
- `FRONTEND_URL` - URL of the frontend application
