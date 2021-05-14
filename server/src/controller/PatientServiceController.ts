import {
  Patient,
  IPatientDto,
  IPatientDocument,
  PatientModel,
} from '../models/patientInformation/Patient';

// interface ICreatePatientInput {
//   patientId: IPatientDocument['PATIENT_ID'];
//   patientFirstName: IPatientDocument['PATIENT_FIRST_NAME'];
//   PatientLastName: IPatientDocument['PATIENT_LAST_NAME'];
//   PatientMiddleName: IPatientDocument['PATIENT_MIDDLE_NAME'];
//   patientSuffix: IPatientDocument['PATIENT_SUFFIX'];
//   patientDob: IPatientDocument['PATIENT_DOB'];
//   patientHeight: IPatientDocument['PATIENT_HEIGHT'];
//   created: IPatientDocument['CREATED'];
//   updated: IPatientDocument['UPDATED'];
// }

async function CreatePatient({
  patientId,
  patientFirstName,
  patientLastName,
  patientMiddleName,
  patientSuffix,
  patientDob,
  patientHeight,
  created,
  updated,
}: IPatientDto): Promise<IPatientDocument>
{
  const patientTobeSave : IPatientDocument = Patient.build({
    patientId,
    patientFirstName,
    patientLastName,
    patientMiddleName,
    patientSuffix,
    patientDob,
    patientHeight,
    created,
    updated
  });
  console.log(`Patient to saved : ${patientTobeSave}`)
  return await patientTobeSave.save();
}

export default {
  CreatePatient,
};
