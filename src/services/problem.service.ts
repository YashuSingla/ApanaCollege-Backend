import { Problem } from '../models/problem.model';
import { Chapter } from '../models/chapter.model';
import { Types } from 'mongoose';

export const createProblem = async (
  chapterId: string,
  title: string,
  youtubeLink: string,
  leetcodeLink: string,
  articleLink: string,
  level: string,
  createdBy: string
) => {
  const chapter = await Chapter.findById(chapterId);
  if (!chapter) throw new Error('Chapter not found');

  const problem = await Problem.create({
    chapterId,
    title,
    youtubeLink,
    leetcodeLink,
    articleLink,
    level,
    createdBy
  });

  // Push problem into the chapter
  chapter.problems.push(problem._id as Types.ObjectId);
  await chapter.save();

  return problem;
};

export const getAllProblems = async () => {
  const problems = await Problem.find().populate('chapterId', 'title');
  return problems;
};
