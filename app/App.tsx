import React from 'react';

import {
  Animated,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  BottomNavigation,
  Divider,
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
import themes from './theme';
import { generateMapping } from './theme/Fonts';

const mapping = generateMapping("Jost");

const smoothScroll = (x: any) => {
  return Animated.event(
    [
      { nativeEvent: { contentOffset: { y: x.state.scrollY } } }
    ],
    { useNativeDriver: true }
  );
};

interface AppProps {
  eva?: any;
}
interface AppState {
  theme: string;
  selectedIndex: number;
  scrollY: Animated.Value;
}
export default class App extends React.Component<AppProps, AppState>{
  screens: Map<number, { title: string, node: any; }>;

  constructor(props: any) {
    super(props);
    this.state = { theme: 'evalight', selectedIndex: 0, scrollY: new Animated.Value(0) };
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
  getColor(name: string): string {
    let v = themes.get(this.state.theme)[name];
    if (v.slice(0, 1) === "$") {
      return this.getColor(v.slice(1));
    }
    return v;
  }
  render() {
    let bg = this.getColor("background-basic-color-2");
    return (
      <ApplicationProvider {...eva}
        customMapping={mapping}
        theme={themes.get(this.state.theme)}>
        <IconRegistry icons={EvaIconsPack} />
        <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
          <View style={{ flex: 1, backgroundColor: bg }}>
            <AppTitle title={this.screens.get(this.state.selectedIndex)?.title || ""} />
            <Animated.ScrollView scrollEventThrottle={160}
              onScroll={smoothScroll(this)}>
              <AppScreen>
                {this.screens.get(this.state.selectedIndex)?.node}
              </AppScreen>
            </Animated.ScrollView>
            <Divider />
            <BottomNavigation
              selectedIndex={this.state.selectedIndex}
              onSelect={index => this.setSelectedIndex(index)}>
              {appNavigationBarItems}
            </BottomNavigation>
          </View>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
};