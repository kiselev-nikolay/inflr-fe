import React from 'react';
import { Text, Button } from '@ui-kitten/components';

export class ContactsScreen extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <>
        <Text>Welcome to ContactsScreen</Text>
        <Button onPress={() => { }}>exit</Button>
      </>
    );
  }
}