import React from 'react';

import {
  Button,
  Text,
} from '@ui-kitten/components';

import tokenService from '../../api/auth';

export class MessagesScreen extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <>
        <Text>Welcome to MessagesScreen</Text>
        <Button onPress={() => { tokenService.register(); }}>register</Button>
        <Text></Text>
        <Button onPress={() => { tokenService.login(); }}>login</Button>
        <Text></Text>
        <Button onPress={() => { tokenService.test(); }}>test</Button>
      </>
    );
  }
}