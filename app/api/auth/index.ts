import { AbstractService } from '../AbstractService';

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
  async register(login: string, password: string) {
    await this.postReq("/new", {
      userKey: login,
      passwordVerification: password,
    });
  }
  async login(login: string, password: string): Promise<string> {
    let res = await this.postReq("/token", {
      userKey: login,
      passwordVerification: password,
    });
    return res.data.token;
  }
  async test() {
    await this.getReq("/test");
  }
}

export default new AuthService;