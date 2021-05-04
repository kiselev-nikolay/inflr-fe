import {
  AbstractService,
  StatusRes,
} from '../AbstractService';

class ProfileService extends AbstractService {
  constructor() {
    super();
    this.base += "/profile";
  }
  // router.POST(prefix+"/new", ctrl.New)
  // router.POST(prefix+"/add-yt", ctrl.AddYoutube)
  // router.GET(prefix+"/get", view.Get)
  new(name: string) {
    this.postReq("/new", {
      name: name
    }, (status: number, data: StatusRes) => {
      ;
    });
  }
  get() {
    this.getReq("/get", (status: number, data: any) => {
      console.log(data);
    });
  }
  addYoutube(link: string) {
    this.postReq("/add-yt", {
      link: link
    }, (status: number, data: StatusRes) => {
      ;
    });
  }
}

export default new ProfileService;