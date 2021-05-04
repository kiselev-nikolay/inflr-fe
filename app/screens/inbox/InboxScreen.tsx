import React from 'react';

import { View } from 'react-native';

import {
  Button,
  Card,
  Icon,
  Text,
} from '@ui-kitten/components';

const PaperPlaneIcon = (props: any) => (
  <Icon {...props} name='paper-plane-outline' />
);

export class InboxScreen extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (<>
      <Card style={{ marginBottom: 10 }}>
        <Text style={{ marginBottom: 10 }} category='h4'>Microsoft Dev</Text>
        <View style={{ marginBottom: 10, flex: 1, flexDirection: "row" }}>
          <Button size="tiny" style={{}}>BRAND</Button>
        </View>
        <Text><Text style={{ fontWeight: "bold" }}>email:</Text> elza@microsoft.com</Text>
        <Text style={{ marginBottom: 10 }}><Text style={{ fontWeight: "bold" }}>message:</Text> Hello! We found your instagram. We think it would be really great to work together.</Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Button onPress={() => { }} accessoryLeft={PaperPlaneIcon}>Message</Button>
        </View>
      </Card>
      <Card style={{ marginBottom: 10 }}>
        <Text style={{ marginBottom: 10 }} category='h4'>Youtube Ads</Text>
        <View style={{ marginBottom: 10, flex: 1, flexDirection: "row" }}>
          <Button size="tiny" style={{}}>BRAND</Button>
        </View>
        <Text><Text style={{ fontWeight: "bold" }}>email:</Text> masha@google.com</Text>
        <Text style={{ marginBottom: 10 }}><Text style={{ fontWeight: "bold" }}>message:</Text> Hello! We found your instagram. We think it would be really great to work together.</Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Button onPress={() => { }} accessoryLeft={PaperPlaneIcon}>Message</Button>
        </View>
      </Card>
      <Card style={{ marginBottom: 10 }}>
        <Text style={{ marginBottom: 10 }} category='h4'>Maxim Boobilba</Text>
        <Text><Text style={{ fontWeight: "bold" }}>email:</Text> maxim.boob@gmail.com</Text>
        <Text style={{ marginBottom: 10 }}><Text style={{ fontWeight: "bold" }}>message:</Text> Hello! We found your instagram. We think it would be really great to work together.</Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Button onPress={() => { }} accessoryLeft={PaperPlaneIcon}>Message</Button>
        </View>
      </Card>
    </>
    );
  }
}