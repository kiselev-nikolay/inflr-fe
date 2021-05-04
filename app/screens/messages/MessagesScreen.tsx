import React from 'react';

import { View } from 'react-native';

import {
  Card,
  Divider,
  Text,
} from '@ui-kitten/components';

export class MessagesScreen extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Card style={{ paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 10 }}>
          <View style={{ marginRight: 5, flex: 1 }}>
            <Text style={{ fontWeight: "bold" }}>Oleg T.</Text>
            <Text>Wow! So... Let's work</Text>
          </View>
          <View style={{ marginRight: 5 }}>
            <Text>8:40</Text>
          </View>
        </View>
        <Divider style={{ marginVertical: 20 }} />
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 10 }}>
          <View style={{ marginRight: 5, flex: 1 }}>
            <Text style={{ fontWeight: "bold" }}>Kaynee W.</Text>
            <Text>I'll gift you a sneakers.</Text>
          </View>
          <View style={{ marginRight: 5 }}>
            <Text>12:31</Text>
          </View>
        </View>
        <Divider style={{ marginVertical: 20 }} />
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 10 }}>
          <View style={{ marginRight: 5, flex: 1 }}>
            <Text style={{ fontWeight: "bold" }}>Stas S.</Text>
            <Text>Okay.</Text>
          </View>
          <View style={{ marginRight: 5 }}>
            <Text>22:59</Text>
          </View>
        </View>
      </Card>
    );
  }
}