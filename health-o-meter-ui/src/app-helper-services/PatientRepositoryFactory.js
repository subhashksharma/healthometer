import PatientDetailsRepository from './repository/PatientDetailsRepository';
import PatientInfoRepository from './repository/PatientInfoRepository';

const repositories = {
  patient: PatientInfoRepository,
  patientDetails: PatientDetailsRepository,
};
export default {
  get: (name) => repositories[name],
};
