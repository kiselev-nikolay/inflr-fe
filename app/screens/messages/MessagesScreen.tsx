import React from 'react';

import {
  Button,
  Text,
} from '@ui-kitten/components';

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