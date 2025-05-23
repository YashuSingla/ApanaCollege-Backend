import { Request, Response, NextFunction } from 'express';

export const globalErrorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    console.error('🔥 Server Error:', err.stack || err.message);
    res.status(500).json({ message: err.message || 'Internal Server Error' });
  } else {
    console.error('🔥 Unknown Error:', err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
