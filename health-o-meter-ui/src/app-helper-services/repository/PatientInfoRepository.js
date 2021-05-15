import { httpClient } from '../client/AxiosClient';
const resource = '/api/patient';

export default {
  getPatient(id) {
    return httpClient.get(`${resource}/${id}`);
  },

  // MANY OTHER ENDPOINT RELATED STUFFS
};
