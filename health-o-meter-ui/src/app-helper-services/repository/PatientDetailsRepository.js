import httpClient from './Clients/AxiosClient';
const resource = '/patient-details';

export default {
  getPatientDetailsbyId(id) {
    return httpClient.get(`${resource}/${id}`);
  },
  getPatientDetailsAddress(id) {
    return httpClient.get(`${resource}/addresss/${id}`);
  },

  // MANY OTHER ENDPOINT RELATED STUFFS
};
