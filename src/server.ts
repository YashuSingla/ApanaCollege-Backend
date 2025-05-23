import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDB } from './db';
import { globalErrorHandler } from './middlewares/errorHandler';
import { logger } from './middlewares/logger';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import chapterRoutes from './routes/chapter.routes';
import problemRoutes from './routes/problem.routes';
import progressRoutes from './routes/progress.routes';
import userRoutes from './routes/user.routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000', // React app
    credentials: true
  }));

app.use(express.json());

// 📝 Log HTTP requests using morgan and winston
app.use(morgan('combined', {
  stream: {
    write: message => logger.info(message.trim())
  }
}));

app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.use('/api/auth', authRoutes);
app.use('/api/chapters', chapterRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/users', userRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
app.use(globalErrorHandler);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  logger.info(`🚀 Server running at http://localhost:${PORT}`);
});
