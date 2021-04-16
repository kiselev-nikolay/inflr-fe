import React from 'react';

import {
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  BottomNavigation,
  IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { appNavigationBarItems } from './navigation/BarItems';
import { AppScreen } from './screens/AppScreen';
import { AppTitle } from './screens/AppTitle';
import { ContactsScreen } from './screens/contacts/ContactsScreen';
import { MessagesScreen } from './screens/messages/MessagesScreen';
import { RewardScreen } from './screens/reward/RewardScreen';
import { SettingsScreen } from './screens/settings/SettingsScreen';

let themes = new Map<string, any>();

themes.set("evadark", eva.dark);
themes.set("evalight", eva.light);

interface AppProps { }
interface AppState {
  theme: string,
  selectedIndex: number;
}
export default class App extends React.Component<AppProps, AppState>{
  screens: Map<number, { title: string, node: any; }>;

  constructor(props: any) {
    super(props);
    this.state = { theme: 'evalight', selectedIndex: 0 };
    this.screens = new Map<number, any>();
    this.screens.set(0, { title: "Reward", node: <RewardScreen /> });
    this.screens.set(1, { title: "Messages", node: <MessagesScreen /> });
    this.screens.set(2, { title: "Contacts", node: <ContactsScreen /> });
    this.screens.set(3, { title: "Settings", node: <SettingsScreen toggleTheme={() => { this.toggleTheme(); }} /> });
  }
  toggleTheme() {
    const nextTheme = this.state.theme === 'evalight' ? 'evadark' : 'evalight';
    this.setState({ theme: nextTheme });
  };
  setSelectedIndex(index: number) {
    this.setState({ selectedIndex: index });
  };
  render() {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
          <ApplicationProvider {...eva} theme={themes.get(this.state.theme)}>
            <AppTitle title={this.screens.get(this.state.selectedIndex)?.title || ""} />
            <AppScreen>
              {this.screens.get(this.state.selectedIndex)?.node}
            </AppScreen>
            <BottomNavigation
              selectedIndex={this.state.selectedIndex}
              onSelect={index => this.setSelectedIndex(index)}>
              {appNavigationBarItems}
            </BottomNavigation>
          </ApplicationProvider>
        </SafeAreaView>
      </>
    );
  }
};