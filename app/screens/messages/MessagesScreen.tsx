import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { AppScreen } from '../AppScreen';

export class MessagesScreen extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <AppScreen title="Messages">
        <Text>Welcome to MessagesScreen</Text>
        <Button onPress={() => { }}>exit</Button>
      </AppScreen>
    );
  }
}