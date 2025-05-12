# Blog Application

A full-stack blog application built with React and Node.js, featuring article management and real-time search capabilities.

## Project Structure

```
15-project3/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/
│   │   ├── routing/
│   │   └── main.jsx
│   └── vite.config.js
│
└── backend/           # Node.js backend application
    ├── controllers/
    ├── models/
    ├── routes/
    └── index.js
```

## Features

- Article creation and management
- Image upload functionality
- Real-time search
- Responsive design
- RESTful API integration

## Technology Stack

### Frontend
- React
- React Router DOM
- Vite
- CSS for styling

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Multer for file uploads
- CORS
- Validator

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- MongoDB Compass (optional)
- Postman (optional)

### Installation

1. Clone the repository
2. Set up the backend:
   ```bash
   cd backend
   npm install
   ```
3. Set up the frontend:
   ```bash
   cd frontend
   npm install
   ```

### Configuration

Create a `.env` file in the backend directory with:
```
MONGO_URI=mongodb://localhost:27017
MONGO_DB=your_database_name
```

### Running the Application

Use the provided start-project.bat file or run manually:

1. Start MongoDB server
2. Start the backend:
   ```bash
   cd backend
   npm start
   ```
3. Start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

## API Endpoints

- `POST /api/create` - Create new article
- `GET /api/articles` - Get all articles
- `GET /api/article/:id` - Get single article
- `PUT /api/article/:id` - Update article
- `DELETE /api/article/:id` - Delete article
- `POST /api/upload-image/:id` - Upload article image
- `GET /api/search/:search` - Search articles

## Author

Marcos Aguiar
