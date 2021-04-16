import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { AppScreen } from '../AppScreen';

export class ContactsScreen extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <AppScreen title="Contacts">
        <Text>Welcome to ContactsScreen</Text>
        <Button onPress={() => { }}>exit</Button>
      </AppScreen>
    );
  }
}