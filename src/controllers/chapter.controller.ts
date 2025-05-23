import { Request, Response } from 'express';
// src/controllers/chapter.controller.ts
import * as chapterService from '../services/chapter.service'; 

export const createChapter = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    const newChapter = await chapterService.createChapter(
        title,
        description,
        req.user!.userId 
      );
      
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
    const chapters = await chapterService.getAllChapters();

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
