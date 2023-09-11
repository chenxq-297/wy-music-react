import type {CreateAxiosDefaults, InternalAxiosRequestConfig, AxiosResponse, AxiosRequestConfig} from 'axios';

export interface MyAxiosRequsetConfig extends CreateAxiosDefaults {
  interceptors?: {
    requsetInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
    requsetInterceptorCatch?: (err: any) => any;
    responseInterceptor?: (config: AxiosResponse) => AxiosResponse;
    responseInterceptorCatch?: (config: any) => any;
  };
}

export interface MyAxiosRequsetLiConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: {
    requsetInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    requsetInterceptorCatch?: (err: any) => any;
    responseInterceptor?: (config: T) => T;
    responseInterceptorCatch?: (config: any) => any;
  };
}
// AxiosInterceptorManager<InternalAxiosRequestConfig>
