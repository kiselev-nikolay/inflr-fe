import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { AppScreen } from '../AppScreen';

export class SettingsScreen extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <AppScreen title="Settings">
        <Text>Welcome to SettingsScreen</Text>
        <Button onPress={() => { }}>exit</Button>
      </AppScreen>
    );
  }
}