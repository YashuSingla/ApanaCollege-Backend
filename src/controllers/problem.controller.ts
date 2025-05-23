import { RequestHandler } from 'express';
import * as problemService from '../services/problem.service';

export const createProblem: RequestHandler = async (req, res) => {
  try {
    const {
      chapterId,
      title,
      youtubeLink,
      leetcodeLink,
      articleLink,
      level
    } = req.body;

    if (!req.user?.userId) {
       res.status(401).json({ success: false, message: 'Unauthorized' });
       return;
    }

    const problem = await problemService.createProblem(
      chapterId,
      title,
      youtubeLink,
      leetcodeLink,
      articleLink,
      level,
      req.user.userId
    );

    res.status(201).json({
      success: true,
      message: 'Problem created and linked to chapter successfully',
      problem
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Server error';
    const status = msg === 'Chapter not found' ? 404 : 500;

    res.status(status).json({
      success: false,
      message: msg
    });
  }
};

export const getAllProblems: RequestHandler = async (req, res) => {
  try {
    const problems = await problemService.getAllProblems();

    res.status(200).json({
      success: true,
      problems
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err instanceof Error ? err.message : err
    });
  }
};
