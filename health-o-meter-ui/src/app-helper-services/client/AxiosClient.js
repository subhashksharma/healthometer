import axios from 'axios';

import store from '@/app-store/AppCentralStore';
let config = {
  headers: {
    //'Access-Control-Allow-Origin': 'http://localhost:8080'
  },
  //timeout: 3000
};

const httpClient = axios.create(config);
const authInterceptor = (config) => {
  config.headers[
    'Authorization'
  ] = `Bearer ${store.getters.getLoginInfo.token}`;
  return config;
};

const loggerInterceptor = (config) => {
  console.log('Sending this data to server :::' + JSON.stringify(config.data));
  return config;
};

httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.request.use(loggerInterceptor);

httpClient.interceptors.response.use(
  (response) => {
    console.log(
      `Response back from the server for every request :: ==> ${JSON.stringify(
        response.status
      )}`
    );
    return response;
  },
  (error) => {
    console.log(` Error while getting response back from server :: 	${error}`);
    return Promise.reject(error);
  }
);

export { httpClient };
