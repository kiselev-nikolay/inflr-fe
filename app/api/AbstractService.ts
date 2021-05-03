import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export interface StatusRes {
  status: string;
}

export type Callback = (status: number, data: any) => void;

export class AbstractService {
  service: AxiosInstance;
  base: string;
  token?: string;

  constructor() {
    let service = axios.create({
      headers: { csrf: 'token' }
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
    this.base = "https://inflr-udobmbp5pa-ey.a.run.app";
  }

  handleSuccess(response: AxiosResponse) {
    return response;
  }

  handleError(error: AxiosError) {
    if (error.response === undefined) {
      return;
    }
    console.log(error.response.data);
    switch (error.response.status) {
      case 401:
        // TODO recapture token
        break;
      case 500:
        break;
      default:
        break;
    }
    return Promise.reject(error);
  };

  get(path: any, callback: Callback) {
    let opts: AxiosRequestConfig = {
      method: 'GET',
      url: this.base + path,
      validateStatus: () => true
    };
    if (this.token !== undefined) {
      opts.headers = {
        "X-Token-Verification": this.token
      };
    }
    return this.service.request(opts).then((response) => callback(response.status, response.data));
  }

  post(path: string, payload: any, callback: Callback) {
    let opts: AxiosRequestConfig = {
      method: 'POST',
      url: this.base + path,
      responseType: 'json',
      data: payload,
      validateStatus: () => true
    };
    if (this.token !== undefined) {
      opts.headers = {
        "X-Token-Verification": this.token
      };
    }
    return this.service.request(opts).then((response) => callback(response.status, response.data));
  }
}
