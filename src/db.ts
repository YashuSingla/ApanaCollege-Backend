import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('❌ MONGODB_URI is not defined in .env');
    }

    await mongoose.connect(mongoUri);
    console.log('✅ MongoDB Connected');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('❌ MongoDB Connection Error:', error.message);
    } else {
      console.error('❌ MongoDB Connection Error:', error);
    }
    process.exit(1);
  }
};
