import Client from '../client/AxiosClient';
const resource = '/patient';

export default {
  getPatient(id) {
    return Client.get(`${resource}/${id}`);
  },

  // MANY OTHER ENDPOINT RELATED STUFFS
};
