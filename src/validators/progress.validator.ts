// src/validators/progress.validator.ts
import Joi from 'joi';

export const progressSchema = Joi.object({
  problemId: Joi.string().required(),
  chapterId: Joi.string().required(),
  isCompleted: Joi.boolean().optional() // optional, default is false in DB
}).required();
