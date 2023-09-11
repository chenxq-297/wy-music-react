import Request from './request';
import {BASE_URL, TIMEOUT} from './request/config';
import LocalCache from '@/utils/cache';

export interface IdataType<T = any> {
  code: number;
  data: T;
}

// 需要登录的请求实例
const wyRequst = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requsetInterceptor: (config) => {
      const token = LocalCache.getCache('RB-cms-Token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    requsetInterceptorCatch(err) {
      console.log(err);
      return err;
    },
    responseInterceptor(config) {
      return config.data;
    },
    responseInterceptorCatch(config) {
      console.log(config);
    },
  },
});

export default wyRequst;
