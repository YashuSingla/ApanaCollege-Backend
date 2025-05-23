import { Request, RequestHandler, Response } from 'express';
import * as userService from '../services/user.service';

export const getProfile: RequestHandler = async (req, res) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
       res.status(401).json({ success: false, message: 'Unauthorized' });
       return
    }

    const user = await userService.getUserProfile(userId);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err instanceof Error ? err.message : 'Server error',
    });
  }
};
