import React from 'react';

import { View } from 'react-native';

import {
  Button,
  Card,
  Icon,
  Input,
  Text,
  Toggle,
} from '@ui-kitten/components';

import profileService from '../../api/profile';
import openBrowser from '../../OpenBrowser';

interface SettingsScreenProps {
  theme: string;
  toggleTheme: () => void;
}
interface SettingsScreenState {
  ytl: string;
}
export class SettingsScreen extends React.Component<SettingsScreenProps, SettingsScreenState> {
  constructor(props: SettingsScreenProps) {
    super(props);
    this.state = {
      ytl: "",
    };
  };
  async addYoutube() {
    await profileService.addYoutube(this.state.ytl);
    this.setState({ ytl: "" });
  }
  render() {
    return (
      <>
        <Card style={{ marginBottom: 10 }}>
          <Text style={{ marginBottom: 10 }} category="h4">Profile</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 10 }}>
            <View style={{ marginRight: 5, flex: 1 }}>
              <Input style={{ marginBottom: 8 }} size='medium' placeholder='Youtube channel link' value={this.state.ytl} onChangeText={nextValue => this.setState({ ytl: nextValue })} />
            </View>
            <View style={{ marginRight: 5 }}>
              <Button style={{ marginBottom: 8, height: 0 }} size='medium' onPress={() => { this.addYoutube(); }}>Add link</Button>
            </View>
          </View>
        </Card>
        <Card style={{ marginBottom: 10 }}>
          <Text category="h4">Settings</Text>
          <Text></Text>
          <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <Toggle style={{ marginBottom: 8 }} checked={this.props.theme === 'evalight'} onChange={() => { this.props.toggleTheme(); }}>
              {this.props.theme === 'evalight' ? 'Light theme' : 'Dark theme'}
            </Toggle>
          </View>
        </Card>
        <View style={{ paddingHorizontal: 20, paddingTop: 40, alignItems: "center", opacity: .3 }}>
          <Text>
            Inflr.app is made by
            {' '}
            <Text style={{ textDecorationStyle: "solid", textDecorationLine: "underline" }} onPress={() => openBrowser("https://nikolai.works/")}>
              Nikolai Kiselev <Icon style={{ width: 14, height: 14 }} fill='#8F9BB3' name='external-link-outline' />
            </Text>
          </Text>
        </View>
      </>
    );
  }
}