import {
  AbstractService,
  StatusRes,
} from '../AbstractService';

interface tokenRes {
  "expire": number;
  "status": string;
  "token": string;
}

class AuthService extends AbstractService {
  constructor() {
    super();
    this.base += "/auth";
  }
  validateStatus() {
    return true;
  };
  register(login: string, password: string) {
    this.postReq("/new", {
      userKey: login,
      passwordVerification: password,
    }, (status: number, data: StatusRes) => {
      ;
    });
  }
  login(login: string, password: string) {
    this.postReq("/token", {
      userKey: login,
      passwordVerification: password,
    }, (status: number, data: tokenRes) => {
      if (data.status == "token created") {
        this.token = data.token;
      }
    });
  }
  test() {
    this.getReq("/test", (status: number, data: any) => { });
  }
}

export default new AuthService;