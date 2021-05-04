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
    service.interceptors.response.use(
      (response: AxiosResponse) => this.handleSuccess(response),
      (error: AxiosError) => this.handleError(error),
    );
    this.service = service;
    this.base = "https://inflr-udobmbp5pa-ey.a.run.app/rnai";
  }

  private logResp(response: AxiosResponse) {
    let code = response.status;
    let status = "...";
    if (response.data !== null && response.data !== undefined) {
      status = response.data.status || status;
    }
    if (response.request !== undefined) {
      let request: XMLHttpRequest = response.request;
      let uri = request.responseURL.replace(this.base, "");
      uri = uri.replace("/", " ").trim();
      uri = uri.charAt(0).toUpperCase() + uri.slice(1);
      console.log(`${uri} -> ${code}, ${status}`);
    } else {
      console.log(`... -> ${code}, ${status}`);
    }
  }

  validateStatus(s: number) {
    return s != 500 && s != 401;
  };

  private handleSuccess(response: AxiosResponse) {
    this.logResp(response);
    return response;
  }

  private handleError(error: AxiosError) {
    if (error.response === undefined) {
      return;
    }
    this.logResp(error.response);
    switch (error.response.status) {
      case 401:
        // TODO recapture token
        break;
      case 500:
        // TODO log error
        break;
    }
    return Promise.reject(error);
  };

  setToken(token: string) {
    this.token = token;
  }

  getReq(path: any) {
    let opts: AxiosRequestConfig = {
      method: 'GET',
      url: this.base + path,
      validateStatus: this.validateStatus
    };
    if (this.token !== undefined) {
      opts.headers = {
        "X-Token-Verification": this.token
      };
    }
    return this.service.request(opts);
  }

  postReq(path: string, payload: any) {
    let opts: AxiosRequestConfig = {
      method: 'POST',
      url: this.base + path,
      responseType: 'json',
      data: payload,
      validateStatus: this.validateStatus
    };
    if (this.token !== undefined) {
      opts.headers = {
        "X-Token-Verification": this.token
      };
    }
    return this.service.request(opts);
  }
}
