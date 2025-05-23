import { Request, Response, RequestHandler } from 'express';
import { authenticateUser, registerUser } from '../services/auth.service';

export const register: RequestHandler = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    await registerUser(name, email, password, role);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err instanceof Error ? err.message : 'Registration failed',
    });
  }
};

export const login: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authenticateUser(email, password);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      ...result,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err instanceof Error ? err.message : 'Login failed',
    });
  }
};
