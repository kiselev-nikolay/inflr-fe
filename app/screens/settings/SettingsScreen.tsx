import React from 'react';

import numeral from 'numeral';
import { View } from 'react-native';
import * as timeago from 'timeago.js';

import {
  Avatar,
  Button,
  Card,
  Divider,
  Layout,
  Text,
} from '@ui-kitten/components';

import tokenService from '../../api/auth';
import profileService from '../../api/profile';

interface YoutubeData {
  title: string;
  description: string;
  imageUrl: string;
  register: string;
  subs: number;
  videos: number;
  views: number;
}
interface YoutubeProps {
  data: YoutubeData;
}
function Youtube(props: YoutubeProps) {
  const Header = () => (
    <View style={{ padding: 20, }}>
      <Text category='h5'>{props.data.title}</Text>
      <Text>Created {timeago.format(Date.parse(props.data.register))}</Text>
    </View>
  );
  return (<Card header={Header} style={{ marginVertical: 10 }}>
    <Layout style={{ flex: 1, flexDirection: 'row', width: '100%' }} level='1'>
      <Layout style={{ flex: 1, flexDirection: 'row', width: '100%' }} level='1'>
        <Avatar source={{ uri: props.data.imageUrl }} />
      </Layout>
      <Layout style={{ flex: 1, flexDirection: 'row', width: '100%' }} level='1'>
        <Text>Subs: {numeral(props.data.subs).format('0.0a')}</Text>
      </Layout>
      <Layout style={{ flex: 1, flexDirection: 'row', width: '100%' }} level='1'>
        <Text>Videos: {numeral(props.data.videos).format('0.0a')}</Text>
      </Layout>
      <Layout style={{ flex: 1, flexDirection: 'row', width: '100%' }} level='1'>
        <Text>Views: {numeral(props.data.views).format('0.0a')}</Text>
      </Layout>
    </Layout>
    <Text style={{ marginTop: 10 }}>{props.data.description}</Text>
  </Card>);
}

interface SettingsScreenProps {
  toggleTheme: () => void;
}
interface SettingsScreenState {
  profile: {
    about: string;
    availability: number;
    country: string;
    links: Array<any>;
    name: string;
    telegram: any;
    tiktok: any;
    youtube: any;
  };
}
export class SettingsScreen extends React.Component<SettingsScreenProps, SettingsScreenState> {
  constructor(props: SettingsScreenProps) {
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
  };
  render() {
    let dom = async () => {
      await tokenService.register("cat3", "cat");
      let token = await tokenService.login("cat3", "cat");
      if (token) {
        tokenService.setToken(token);
        profileService.setToken(token);
      }
      await tokenService.test();
      // await profileService.new("Cat");
      // await profileService.addYoutube("https://www.youtube.com/channel/UCrnEZZA7JAkCa19bJO8lQ-A");
      let res = await profileService.get();
      this.setState({
        profile: res.data.profile
      });
    };
    return (
      <>
        <Text style={{ marginBottom: 10 }} category="h4">Profile</Text>
        <Text style={{ marginBottom: 10 }}>Name: {this.state.profile.name}</Text>
        {Object.keys(this.state.profile.youtube).length > 0 && <Text style={{ marginBottom: 10 }}>Youtube:</Text>}
        {Object.entries(this.state.profile.youtube).map((i: [string, unknown]) => {
          let v = i[1] as YoutubeData;
          return (<Youtube key={v.imageUrl} data={v} />);
        })}
        {Object.keys(this.state.profile.youtube).length == 0 && <Layout style={{ flexDirection: 'column', alignItems: 'flex-start', marginTop: 10 }} level='2'>
          <Button style={{ marginBottom: 8 }} onPress={() => { dom(); }}>Get Data</Button>
        </Layout>}
        <Divider style={{ marginVertical: 30 }} />
        <Text category="h4">Settings</Text>
        <Text></Text>
        <Layout style={{ flexDirection: 'column', alignItems: 'flex-start' }} level='2'>
          <Button style={{ marginBottom: 8 }} onPress={() => { this.props.toggleTheme(); }}>Change theme</Button>
        </Layout>
      </>
    );
  }
}