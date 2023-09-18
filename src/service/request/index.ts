import axios from 'axios';

import type { AxiosInstance } from 'axios';
import type { MyAxiosRequsetConfig, MyAxiosRequsetLiConfig } from './type';

class Request {
  instance: AxiosInstance;

  constructor(config: MyAxiosRequsetConfig) {
    this.instance = axios.create(config);

    // 拦截器的顺序是添加的顺序执行
    // this.interceptors 实例的拦截
    this.instance.interceptors.request.use(
      config.interceptors?.requsetInterceptor,
      config.interceptors?.requsetInterceptorCatch
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.requsetInterceptorCatch
    );
    // 全局
    this.instance.interceptors.request.use(
      (res) => {
        // console.log('全局请求拦截', res)
        return res;
      },
      (err) => {
        return err;
        // console.log('全局请求错误', err)
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('全局响应拦截', res, res.data)
        return res;
      },
      (err) => {
        return err;
        // console.log('全局响应拦截错误', err)
      }
    );
  }

  request<T>(config: MyAxiosRequsetLiConfig<T>) {
    if (config.interceptors?.requsetInterceptor) {
      config = config.interceptors.requsetInterceptor(config);
    }
    return new Promise<T>((resolve, reject) => {
      this.instance.request<any, T>(config).then(
        (res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  get<T>(config: MyAxiosRequsetLiConfig<T>) {
    return this.request({ ...config, method: 'GET' });
  }

  post<T>(config: MyAxiosRequsetLiConfig<T>) {
    return this.request({ ...config, method: 'POST' });
  }

  delete<T>(config: MyAxiosRequsetLiConfig<T>) {
    return this.request({ ...config, method: 'DELETE' });
  }

  patch<T>(config: MyAxiosRequsetLiConfig<T>) {
    return this.request({ ...config, method: 'PATCH' });
  }
}
export default Request;
