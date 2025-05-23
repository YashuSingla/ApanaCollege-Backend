// src/validators/problem.validator.ts
import Joi from 'joi';

export const problemSchema = Joi.object({
  chapterId: Joi.string().required().messages({
    'string.empty': 'Chapter ID is required'
  }),
  title: Joi.string().min(3).required(),
  youtubeLink: Joi.string().uri().optional(),
  leetcodeLink: Joi.string().uri().optional(),
  articleLink: Joi.string().uri().optional(),
  level: Joi.string().valid('Easy', 'Medium', 'Hard').required()
}).required();
