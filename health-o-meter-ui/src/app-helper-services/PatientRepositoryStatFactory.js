import httpClient from './client/AxiosClient';
const resource = '/users';

export default {
  get() {
    return httpClient.get(`${resource}`);
  },
  getUser(id) {
    return httpClient.get(`${resource}/${id}`);
  },
  create(payload) {
    return httpClient.post(`${resource}`, payload);
  },
  update(payload, id) {
    return httpClient.put(`${resource}/${id}`, payload);
  },
  delete(id) {
    return httpClient.delete(`${resource}/${id}`);
  },

  // MANY OTHER ENDPOINT RELATED STUFFS
};
