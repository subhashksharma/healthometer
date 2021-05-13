import Client from './Clients/AxiosClient';
const resource = '/patient-details';

export default {
  getPatientDetailsbyId(id) {
    return Client.get(`${resource}/${id}`);
  },
  getPatientDetailsAddress(id) {
    return Client.get(`${resource}/addresss/${id}`);
  },

  // MANY OTHER ENDPOINT RELATED STUFFS
};
