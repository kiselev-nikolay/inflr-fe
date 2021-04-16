import React from 'react';
import { Layout } from '@ui-kitten/components';

interface AppScreenProps {
  children: React.ReactNode;
}

export function AppScreen(props: AppScreenProps) {
  return (
    <Layout level="2" style={{ flex: 1, padding: 20, justifyContent: 'flex-start', alignItems: 'stretch' }}>
      {props.children}
    </Layout>
  );
};