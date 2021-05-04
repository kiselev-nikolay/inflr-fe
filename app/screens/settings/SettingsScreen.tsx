import React from 'react';

import {
  Button,
  Layout,
  Text,
} from '@ui-kitten/components';

import tokenService from '../../api/auth';
import profileService from '../../api/profile';

interface SettingsScreenProps {
  toggleTheme: () => void;
}

export class SettingsScreen extends React.Component<SettingsScreenProps, any> {
  constructor(props: SettingsScreenProps) {
    super(props);
  }
  render() {
    return (
      <>
        <Text category="h1">Settings</Text>
        <Text></Text>
        <Layout style={{ flexDirection: 'column', alignItems: 'flex-start' }} level='2'>
          <Button style={{ marginBottom: 8 }} onPress={() => { this.props.toggleTheme(); }}>Change theme</Button>
          <Button style={{ marginBottom: 8 }} onPress={() => { tokenService.register("cat3", "cat"); }}>tokenService.register()</Button>
          <Button style={{ marginBottom: 8 }} onPress={() => { tokenService.login("cat3", "cat"); }}>tokenService.login()</Button>
          <Button style={{ marginBottom: 8 }} onPress={() => { tokenService.test(); }}>tokenService.test()</Button>
          <Button style={{ marginBottom: 8 }} onPress={() => { profileService.token = tokenService.token; profileService.new("Cat"); }}>profileService.new()</Button>
          <Button style={{ marginBottom: 8 }} onPress={() => { profileService.token = tokenService.token; profileService.get(); }}>profileService.get()</Button>
          <Button style={{ marginBottom: 8 }} onPress={() => { profileService.token = tokenService.token; profileService.addYoutube("https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw"); }}>profileService.addYoutube()</Button>
        </Layout>
      </>
    );
  }
}