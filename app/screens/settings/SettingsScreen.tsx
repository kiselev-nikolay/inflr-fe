import React from 'react';

import {
  Button,
  Text,
} from '@ui-kitten/components';

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
        <Button onPress={() => { this.props.toggleTheme(); }}>Change theme</Button>
      </>
    );
  }
}