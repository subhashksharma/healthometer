import { httpClient } from '@/app-helper-services/client/AxiosClient';
const resource = '/api/auth/user';

export default {
  signInUser(payload) {
    return httpClient.post(`${resource}/signin`, payload);
  },
  signOutUser() {
    return httpClient.post(`${resource}/signout`);
  },

  // MANY OTHER ENDPOINT RELATED STUFFS
};
