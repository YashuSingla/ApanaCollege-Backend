// src/middlewares/auth.middleware.ts
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction, RequestHandler } from 'express';

const JWT_SECRET = process.env.JWT_SECRET!;


export const verifyToken: RequestHandler = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token){
        res.status(401).json({ success: false, message: 'Unauthorized' });
        return;
    } 
        
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET) ;
      (req as any).user = decoded; // ✅ cast to any if not using global type
      next();
    } catch (err) {
       res.status(401).json({ success: false, message: 'Invalid token' });
    }
  };

export const requireAdmin: RequestHandler = (req, res, next) => {
  if (req.user && req.user.role !== 'admin') {
     res.status(403).json({ success: false, message: 'Admin access required' });
     return;
  }
  next();
};
