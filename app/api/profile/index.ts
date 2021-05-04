import { AbstractService } from '../AbstractService';

class ProfileService extends AbstractService {
  constructor() {
    super();
    this.base += "/profile";
  }
  async new(name: string) {
    await this.postReq("/new", {
      name: name
    });
  }
  async get() {
    return await this.getReq("/get");
  }
  async addYoutube(link: string) {
    await this.postReq("/add-yt", {
      link: link
    });
  }
}

export default new ProfileService;