DSA Sheet Tracker – Backend
A full-featured backend service for students to track their DSA (Data Structures & Algorithms) preparation progress — built with Node.js, Express, MongoDB, and TypeScript.
🚀 Features
✅ JWT-based User Authentication
✅ DSA Chapters with Sub-Topics/Problems
✅ YouTube, Leetcode, Codeforces, and Article Links
✅ Difficulty Levels (Easy, Medium, Hard)
✅ User-specific Progress Tracking with Checkboxes
✅ Structured and Validated APIs using Joi
✅ Organized Folder Structure
✅ Logging with Morgan and Winston
🛠️ Tech Stack
Language: TypeScript
Backend: Node.js + Express.js
Database: MongoDB (via Mongoose)
Auth: JWT, bcrypt
Validation: Joi
Logging: Winston + Morgan
📁 Folder Structure

src/
├── controllers/       # Business logic
├── models/            # Mongoose schemas
├── middlewares/       # Auth, validation, logging
├── routes/            # Route handlers
├── validators/        # Joi validation schemas
├── utils/             # Helpers, JWT, etc.
├── db.ts              # MongoDB connection
└── server.ts          # App entry point


⚙️ Environment Variables
Create a .env file in your root:

PORT=5000
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/<db>
JWT_SECRET=your_jwt_secret


📦 Getting Started
1. Clone and Install

git clone https://github.com/your-username/dsa-sheet-backend.git
cd ApnaCollege-Backend
npm install


2. Run the App
npm run dev
🔌 API Endpoints
🧾 Auth
POST   /api/auth/register   - Register user
POST   /api/auth/login   - Login & get token
📚 Chapters & Problems
GET   /api/chapters   - Get all chapters
POST   /api/chapters   - Create new chapter
GET   /api/chapters/:id   - Get problems for a chapter
POST   /api/problems   - Add new problem
✅ Progress Tracking
GET   /api/progress/:userId   - Fetch user’s problem progress
POST   /api/progress   - Update problem completion state
🔐 JWT Usage
Send JWT in the Authorization header:
Authorization: Bearer <token>
✅ Planned Enhancements
☑️ Admin Panel for managing chapters/problems
☑️ Google OAuth Integration
☑️ Search/Filter support
☑️ User progress analytics and streaks
🤝 Contributing

1. Fork the repository
2. Create your branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request


🙌 Acknowledgements
Built with ❤️ to help students stay consistent with DSA.
