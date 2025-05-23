import Joi from 'joi';

export const chapterSchema = Joi.object({
  title: Joi.string().trim().min(3).required().messages({
    'string.empty': 'Title is required',
    'string.min': 'Title should be at least 3 characters',
  }),
  description: Joi.string().max(300).allow('').optional().messages({
    'string.base': 'Description must be a string',
    'string.max': 'Description should not exceed 300 characters',
  }),
  problems: Joi.array().items(Joi.string().hex().length(24)).optional()
}).required();
