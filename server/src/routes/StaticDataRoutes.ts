'use strict';
import express, { Request, Response } from 'express';
import { body } from 'express-validator';

//ts-ignore
//import * as patienData from '../static-json/patienData.json';
import { strict } from 'assert';

const router = express.Router();

router.get('/api/patientData', async (req: Request, res: Response) => {
  res.send('patienData');
});

export { router as staticDataRoutes };
