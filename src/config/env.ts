import dotenv from 'dotenv';
dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is missing in .env');
}

export const env = {
  JWT_SECRET: process.env.JWT_SECRET!,
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI!,
};
