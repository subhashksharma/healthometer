import {
  Patient,
  IPatientDto,
  IPatientDocument
} from '../models/patientInformation/Patient';
import { FilterQuery} from 'mongoose';


async function CreatePatient({
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
    patientFirstName,
    patientLastName,
    patientMiddleName,
    patientSuffix,
    patientDob,
    patientHeight,
    created,
    updated
  });
  console.log(`Patient to be saved : ${patientTobeSave}`)
  return await patientTobeSave.save();
}

async function getPatientBaseOnCriteria(filter: FilterQuery<IPatientDocument>): Promise<IPatientDocument[]>
{
  console.log(`Criteria for findind patient ::: ${JSON.stringify(filter)}`)
  const patientRetrieved : IPatientDocument []= await Patient.find(filter)
  console.log(`Found Patient for criteria : ${patientRetrieved}`)
  return patientRetrieved;
}


export default {
  CreatePatient,
  getPatientBaseOnCriteria
};
