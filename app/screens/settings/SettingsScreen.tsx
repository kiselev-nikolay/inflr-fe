import React from 'react';
import { Text } from '@ui-kitten/components';
import { AppScreen } from '../AppScreen';

export class SettingsScreen extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <AppScreen title="Settings">
        <Text category="h1">Settings</Text>
      </AppScreen>
    );
  }
}