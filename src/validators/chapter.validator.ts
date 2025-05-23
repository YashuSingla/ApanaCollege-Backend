// src/validators/chapter.validator.ts
import Joi from 'joi';

export const chapterSchema = Joi.object({
  title: Joi.string().min(3).required().messages({
    'string.empty': 'Title is required',
    'string.min': 'Title should be at least 3 characters',
  }),
  description: Joi.string().allow('').optional().messages({
    'string.base': 'Description must be a string',
  })
}).required();
