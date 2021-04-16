import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';

export class MessagesScreen extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <>
        <Text>Welcome to MessagesScreen</Text>
        <Button onPress={() => { }}>exit</Button>
      </>
    );
  }
}