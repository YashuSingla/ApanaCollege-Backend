DSA Sheet Tracker – Backend

A full-featured backend service for students to track their DSA (Data Structures & Algorithms) preparation progress — built with Node.js, Express, MongoDB, and TypeScript.

🚀 Features

✅ JWT-based User Authentication (Register/Login)

✅ DSA Chapters with Problems/Sub-Topics

✅ YouTube, Leetcode, Codeforces, and Article Links per Problem

✅ Difficulty Levels (Easy, Medium, Hard)

✅ User-specific Progress Tracking with Checkboxes

✅ Modular Service Layer for Business Logic

✅ Schema Validation with Joi

✅ Scalable and Clean Folder Structure

✅ Logging with Winston and Morgan

🛠️ Tech Stack

Language: TypeScript

Backend: Node.js + Express.js

Database: MongoDB (via Mongoose)

Auth: JWT, bcrypt

Validation: Joi

Logging: Winston + Morgan

📁 Folder Structure

src/
├── controllers/       # Handles HTTP request/response
├── services/          # Business logic layer
├── models/            # Mongoose schemas
├── middlewares/       # Auth, validation, error handlers
├── routes/            # API endpoints
├── validators/        # Joi schemas for validation
├── utils/             # Helper functions (JWT, logger, etc.)
├── db.ts              # MongoDB connection
└── server.ts          # App bootstrap

⚙️ Environment Variables

Create a .env file in the project root:

PORT=5000
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/<db>
JWT_SECRET=your_jwt_secret

📦 Getting Started

1. Clone and Install

git clone https://github.com/YashuSingla/ApanaCollege-Backend.git
cd ApnaCollege-Backend
npm install

2. Run the App

npm run dev

🖐️ API Endpoints

💾 Auth

POST /api/auth/register - Register a new user

POST /api/auth/login - Login & receive JWT

📖 Chapters & Problems

GET /api/chapters - Fetch all chapters

POST /api/chapters - Create a new chapter

POST /api/problems - Add a new problem to a chapter

GET /api/problems - Get all problems for chapter

✅ Progress Tracking

GET /api/progress - Get progress for logged-in user

POST /api/progress - Mark a problem as completed/incomplete

✅ Progress Data Structure:

{
  "userId": "abc123",
  "data": {
    "chapterId1": {
      "progress": {
        "problemId1": { "status": true },
        "problemId2": { "status": false }
      }
    }
  }
}

🔐 JWT Usage

Send JWT token in the header:

Authorization: Bearer <token>

✅ Planned Enhancements



🙏 Acknowledgements

Built with ❤️ to help students stay consistent and accountable with their DSA preparation journey.

