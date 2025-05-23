// src/controllers/progress.controller.ts
import { RequestHandler } from 'express';
import { Progress } from '../models/progress.model';
import { Problem } from '../models/problem.model';
import { Chapter } from '../models/chapter.model';

export const markProgress: RequestHandler = async (req, res) => {
  try {
    const { problemId, chapterId, isCompleted } = req.body;
    
    const problem = await Problem.findById(problemId);
    if (!problem) {
       res.status(404).json({
        success: false,
        message: 'Problem not found',
      });
      return;
    }

    const chapterExists = await Chapter.exists({ _id: chapterId });
    if (!chapterExists) {
       res.status(404).json({
        success: false,
        message: 'Chapter not found',
      });
      return;
    }

    // ✅ Ensure problem belongs to this chapter
    if (problem.chapterId.toString() !== chapterId) {
       res.status(400).json({
        success: false,
        message: 'This problem does not belong to the given chapter',
      });
      return;
    }

    const existing = await Progress.findOne({
      userId: req.user?.userId,
      problemId,
    });    

    if (existing) {
      await existing.save();
       res.status(200).json({
        success: true,
        message: 'Progress updated',
        progress: existing
      });
      return;
    }

    const progress = await Progress.create({
      userId: req.user?.userId,
      problemId,
      chapterId,
      isCompleted
    });

    res.status(201).json({
      success: true,
      message: 'Progress recorded',
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

export const getUserProgress: RequestHandler = async (req, res) => {
  try {
    const userId = req.user?.userId;

    const progress = await Progress.find({ userId })
      .populate('problemId', 'title level')
      .populate('chapterId', 'title');

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
