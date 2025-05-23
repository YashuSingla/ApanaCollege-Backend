import { createLogger, transports, format } from 'winston';
import fs from 'fs';
import path from 'path';

// Ensure log directory exists
const logDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(info => `${info.timestamp} [${info.level.toUpperCase()}] - ${info.message}`)
  ),
  transports: [
    new transports.File({ filename: path.join(logDir, 'combined.log') }),
    // new transports.Console() // Remove this in production if needed
  ]
});
