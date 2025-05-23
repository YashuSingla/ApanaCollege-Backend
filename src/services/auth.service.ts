// src/services/auth.service.ts
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';
import { env } from '../config/env';

export const registerUser = async (name: string, email: string, password: string, role: string) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashedPassword, role });
};

export const authenticateUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign({ userId: user._id, role: user.role }, env.JWT_SECRET, {
    expiresIn: '7d',
  });

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};
