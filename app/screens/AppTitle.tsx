import React from 'react';

import { View } from 'react-native';

import {
  Divider,
  Icon,
  Layout,
  Text,
} from '@ui-kitten/components';

import { Logo } from '../logo';

interface AppTitleProps {
  title: string;
}

export class AppTitle extends React.Component<AppTitleProps, any> {
  constructor(props: AppTitleProps) {
    super(props);
  }
  render() {
    return (
      <Layout level='1'>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <View style={{ flex: 1, alignItems: "flex-start", padding: 20 }}>
            <Icon style={{ width: 24, height: 24 }} fill='#ccc' name='bell-outline' pack="eva" />
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text category="h5">{this.props.title}</Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end", padding: 10, paddingRight: 20 }}>
            <Logo size={50} fill='#ccc'></Logo>
          </View>
        </View>
        <Divider />
      </Layout>
    );
  };
};