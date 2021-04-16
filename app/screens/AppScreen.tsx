import React from 'react';
import { Divider, Layout, TopNavigationAction } from '@ui-kitten/components';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { Logo } from '../logo';

interface AppScreenProps {
  title: string;
  children: React.ReactNode;
}

export function AppScreen(props: AppScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
      <TopNavigationAction icon={Logo} />
      <Divider />
      <Layout style={{ flex: 1, padding: 20, justifyContent: 'flex-start', alignItems: 'stretch' }}>
        {props.children}
      </Layout>
    </SafeAreaView>
  );
};