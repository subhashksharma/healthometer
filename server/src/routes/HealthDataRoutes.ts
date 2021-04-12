'use strict';
import express, { Request, Response } from 'express';
import { body } from 'express-validator';

const router = express.Router();

router.get('/health', async (req: Request, res: Response) => {
  res.send('jsonData');
});

export { router as healthDataRoutes };
