import Patient, { IPatient } from '../models/patientInformation/Patient';

interface ICreatePatientInput {
  patientId: IPatient['PATIENT_ID'];
  patientFirstName: IPatient['PATIENT_FIRST_NAME'];
  PatientLastName: IPatient['PATIENT_LAST_NAME'];
  PatientMiddleName: IPatient['PATIENT_MIDDLE_NAME'];
  patientSuffix: IPatient['PATIENT_SUFFIX'];
  patientDob: IPatient['PATIENT_DOB'];
  patientHeight: IPatient['PATIENT_HEIGHT'];
  created: IPatient['CREATED'];
  updated: IPatient['UPDATED'];
}

async function CreatePatient({
  patientId,
  patientFirstName,
  PatientLastName,
  PatientMiddleName,
  patientSuffix,
  patientDob,
  patientHeight,
  created,
  updated,
}: ICreatePatientInput): Promise<IPatient> {
  return Patient.create({
    patientId,
    patientFirstName,
    PatientLastName,
    PatientMiddleName,
    patientSuffix,
    patientDob,
    patientHeight,
    created,
    updated,
  })
    .then((data: IPatient) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

async function getPatient(id: String): Promise<IPatient> {
  return Patient.find({ patientId: id })
    .then((data: IPatient) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export default {
  CreatePatient,
  getPatient,
};
