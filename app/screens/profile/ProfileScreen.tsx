import React from 'react';

import tokenService from '../../api/auth';
import profileService from '../../api/profile';
import { Profile } from '../../ui/profile';

interface ProfileScreenState {
  profile: {
    about: "",
    availability: 0,
    country: "",
    links: [],
    name: "",
    telegram: {},
    tiktok: {},
    youtube: {},
  };
}

export class ProfileScreen extends React.Component<any, ProfileScreenState> {
  constructor(props: any) {
    super(props);
    this.state = {
      profile: {
        about: "",
        availability: 0,
        country: "",
        links: [],
        name: "",
        telegram: {},
        tiktok: {},
        youtube: {},
      }
    };
  }
  async init() {
    await tokenService.register("cat3", "cat");
    let token = await tokenService.login("cat3", "cat");
    if (token) {
      tokenService.setToken(token);
      profileService.setToken(token);
    }
    await tokenService.test();
    await profileService.new("Cat");
  }
  async getProfile() {
    let res = await profileService.get();
    this.setState({
      profile: res.data.profile
    });
  };
  componentDidMount() {
    this.init().then(() => this.getProfile());
  }
  render() {
    return (
      <>
        {this.state.profile && <Profile profile={this.state.profile} />}
      </>
    );
  }
}