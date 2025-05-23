import { RequestHandler } from 'express';
import * as progressService from '../services/progress.service';

export const markProgress: RequestHandler = async (req, res) => {
  try {
    const { chapterId, problemId, isCompleted = true } = req.body;
    const userId = req.user?.userId;

    if (!userId) {
       res.status(401).json({ success: false, message: 'Unauthorized' });
       return
    }

    const updatedProgress = await progressService.markProgress(
      userId,
      chapterId,
      problemId,
      isCompleted
    );

    res.status(200).json({
      success: true,
      message: 'Progress updated successfully',
      progress: updatedProgress
    });

  } catch (err) {
    const message = err instanceof Error ? err.message : 'Server error';
    const status =
      message.includes('not found') || message.includes('belong') ? 400 : 500;

    res.status(status).json({
      success: false,
      message
    });
  }
};

export const getUserProgress: RequestHandler = async (req, res) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
       res.status(401).json({ success: false, message: 'Unauthorized' });
       return;
    }

    const progress = await progressService.getUserProgress(userId);

    res.status(200).json({
      success: true,
      progress
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err instanceof Error ? err.message : err
    });
  }
};
