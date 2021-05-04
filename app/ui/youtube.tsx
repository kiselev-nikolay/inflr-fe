import React from 'react';

import numeral from 'numeral';
import { View } from 'react-native';
import * as timeago from 'timeago.js';

import {
  Avatar,
  Card,
  Text,
} from '@ui-kitten/components';

export interface YoutubeData {
  title: string;
  description: string;
  imageUrl: string;
  register: string;
  subs: number;
  videos: number;
  views: number;
}
interface YoutubeProps {
  data: YoutubeData;
}
export function Youtube(props: YoutubeProps) {
  const Header = () => (
    <View style={{ padding: 15, flex: 1, flexDirection: 'row', }}>
      <View style={{ marginRight: 15 }}>
        <Avatar source={{ uri: props.data.imageUrl }} />
      </View>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text category='h5'>{props.data.title}</Text>
        <Text>Created {timeago.format(Date.parse(props.data.register))}</Text>
      </View>
    </View>
  );
  return (<Card header={Header} style={{ marginVertical: 10 }}>
    <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
      <View style={{ flex: 1, flexDirection: 'column', width: '100%', alignContent: "center", alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontWeight: "bold" }}>Subs</Text>
        <Text>{numeral(props.data.subs).format('0.0a')}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'column', width: '100%', alignContent: "center", alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontWeight: "bold" }}>Videos</Text>
        <Text>{numeral(props.data.videos).format('0')}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'column', width: '100%', alignContent: "center", alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontWeight: "bold" }}>Views</Text>
        <Text>{numeral(props.data.views).format('0.0a')}</Text>
      </View>
    </View>
  </Card>);
}
