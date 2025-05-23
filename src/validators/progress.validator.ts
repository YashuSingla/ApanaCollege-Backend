import Joi from 'joi';

export const progressSchema = Joi.object({
  chapterId: Joi.string().required().messages({
    'string.base': 'chapterId must be a string',
    'any.required': 'chapterId is required',
  }),
  problemId: Joi.string().required().messages({
    'string.base': 'problemId must be a string',
    'any.required': 'problemId is required',
  }),
  isCompleted: Joi.boolean().optional().messages({
    'boolean.base': 'isCompleted must be a boolean',
  })
}).required();
