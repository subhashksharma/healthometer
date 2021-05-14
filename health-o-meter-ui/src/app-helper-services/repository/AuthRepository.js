import { httpClient } from '@/app-helper-services/client/AxiosClient';
const resource = '/api/auth/user';

export default {
  signInUser(payload) {
    return httpClient.post(`${resource}/signin`, payload);
  },
  signOutUser(id) {
    return httpClient.get(`${resource}/signout/${id}`);
  },

  // MANY OTHER ENDPOINT RELATED STUFFS
};
