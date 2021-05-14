'use strict';
import express, { raw, Request, Response } from 'express';
import PatientController from '../controller/PatientServiceController';

const router = express.Router();

router.post('/patient', async (req: Request, res: Response) => {
  console.log(`POST :: /patient----  ::::: ${JSON.stringify(req.body)} `);
  const {
    patientId,
    patientFirstName,
    patientLastName,
    patientMiddleName,
    patientSuffix,
    patientbdy,
    patientHeight,
    created,
    updated,
  } = req.body;

  let patientDob = new Date();
  console.log(patientDob);
  const patientData = await PatientController.CreatePatient({
    patientId,
    patientFirstName,
    patientLastName,
    patientMiddleName,
    patientSuffix,
    patientDob,
    patientHeight,
    created,
    updated,
  })
    .then((patient) => {
      return patient;
    })
    .catch((err) => {
      console.log(err);
      console.error;
      res.status(500).send(err);
    });
  res.status(201).send(patientData);
});

export { router as patientInfoRoutes };
