// middleware/validateBody.ts
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validateBody = (schema: Joi.ObjectSchema) => {
    
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);
    console.log(error,'error');
    
    if (error) {
      res.status(400).json({
        message: 'Validation error',
        details: error.details.map(d => d.message),
      });
      return;
    }
    next();
  };
};
