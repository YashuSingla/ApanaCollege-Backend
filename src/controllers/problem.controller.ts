import { RequestHandler } from 'express';
import { Problem } from '../models/problem.model';
import { Chapter } from '../models/chapter.model';

export const createProblem: RequestHandler = async (req, res) => {
  try {
    const { chapterId, title, youtubeLink, leetcodeLink, articleLink, level } = req.body;
    const chapter = await Chapter.findById(chapterId);
    if (!chapter) {
      res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
      return;
    }
    const problem = await Problem.create({
      chapterId,
      title,
      youtubeLink,
      leetcodeLink,
      articleLink,
      level,
      createdBy: req.user?.userId // works if you've extended req.user in global type
    });

    res.status(201).json({
      success: true,
      message: 'Problem created successfully',
      problem
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err instanceof Error ? err.message : err
    });
  }
};

export const getAllProblems: RequestHandler = async (req, res) => {
    try {
      const problems = await Problem.find().populate('chapterId', 'title');
  
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
  