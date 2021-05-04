import React from 'react';

import { View } from 'react-native';

import {
  Divider,
  Icon,
  Layout,
  Text,
  ThemedComponentClass,
  withStyles,
} from '@ui-kitten/components';

import { Logo } from '../logo';

interface AppTitleProps {
  title: string;
}

interface StyledAppTitleProps extends AppTitleProps {
  eva: any;
}

function StyledAppTitle(props: StyledAppTitleProps) {
  return (
    <Layout level='1'>
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "flex-start", padding: 10, paddingHorizontal: 20, opacity: .34 }}>
          <Logo size={50} fill={props.eva.theme['text-basic-color']}></Logo>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text category="h5">{props.title}</Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end", padding: 20, opacity: .34 }}>
          <Icon style={{ width: 24, height: 24 }} fill={props.eva.theme['text-basic-color']} name='share-outline' pack="eva" />
        </View>
      </View>
      <Divider />
    </Layout>
  );
};
export const AppTitle = withStyles(StyledAppTitle) as ThemedComponentClass<AppTitleProps, any>;