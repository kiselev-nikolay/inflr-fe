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
  register() {
    this.post("/register", {
      userKey: "cat",
      passwordVerification: "cat",
    }, (status: number, data: StatusRes) => {
      console.log("Register -> " + data.status);
    });
  }
  login() {
    this.post("/token", {
      userKey: "cat",
      passwordVerification: "cat",
    }, (status: number, data: tokenRes) => {
      console.log("Login -> " + data.status);
      if (data.status == "token created") {
        this.token = data.token;
      }
    });
  }
  test() {
    this.get("/test", (status: number, data: any) => {
      console.log("Test -> " + status);
    });
  }
}

export default new AuthService;