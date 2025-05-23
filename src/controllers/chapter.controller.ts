// src/controllers/chapter.controller.ts
import { Request, Response } from 'express';
import { Chapter } from '../models/chapter.model';

export const createChapter = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    const newChapter = await Chapter.create({
      title,
      description,
      createdBy: req?.user?.userId, // assuming userId is in JWT payload
    });

    res.status(201).json({
      success: true,
      message: 'Chapter created successfully',
      chapter: newChapter,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: err instanceof Error ? err.message : err,
    });
  }
};

export const getAllChapters = async (req: Request, res: Response) => {
  try {
    const chapters = await Chapter.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      chapters,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: err instanceof Error ? err.message : err,
    });
  }
};
