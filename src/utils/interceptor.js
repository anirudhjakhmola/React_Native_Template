import axios from 'axios';
import {url} from './config';

const axiosInstance = axios.create({
  baseURL: url,
  validateStatus: () => true,
  timeout: 8000,
});

// let store;

// export const injectStore = _store => {
//   store = _store;
// };

axiosInstance.interceptors.request.use(
  async config => {
    // const USER = store.getState().user.userInfo;

    // config.headers = {
    //   'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    // };
    // if (USER) {
    //   config.headers = {
    //     Authorization: `Bearer ${USER.access_token}`,
    //   };
    // }
    // config.headers = {
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   Accept: 'application/json',
    // };
    config.headers.Accept = 'application/json';
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  error => {
    if (error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);
export default axiosInstance;
