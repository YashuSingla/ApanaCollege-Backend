import { Chapter } from "../models/chapter.model";
import { Problem } from "../models/problem.model";
import { Progress } from "../models/progress.model";

export const markProgress = async (
    userId: string,
    chapterId: string,
    problemId: string,
    isCompleted: boolean
  ) => {
    const problem = await Problem.findById(problemId);
    if (!problem) throw new Error("Problem not found");
  
    const chapter = await Chapter.findById(chapterId);
    if (!chapter) throw new Error("Chapter not found");
  
    if (problem.chapterId.toString() !== chapterId) {
      throw new Error("This problem does not belong to the given chapter");
    }
  
    let progress = await Progress.findOne({ userId });
  
    if (!progress) {
      progress = await Progress.create({
        userId,
        data: {
          [chapterId]: {
            progress: {
              [problemId]: { status: isCompleted },
            },
          },
        },
      });
    } else {
      const data = progress.data || {};
  
      if (!data[chapterId]) {
        data[chapterId] = { progress: {} };
      }
  
      data[chapterId].progress[problemId] = { status: isCompleted };
      progress.data = data;
      
      progress.markModified('data');
      await progress.save();
    }
  
    return progress;
  };

export const getUserProgress = async (userId: string) => {
  return await Progress.findOne({ userId });
};
