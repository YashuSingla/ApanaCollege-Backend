import { Chapter } from '../models/chapter.model';

export const createChapter = async (
  title: string,
  description: string,
  createdBy: string
) => {
  const newChapter = await Chapter.create({ title, description, createdBy });
  return newChapter;
};

export const getAllChapters = async () => {
  const chapters = await Chapter.find().sort({ createdAt: -1 });
  return chapters;
};
