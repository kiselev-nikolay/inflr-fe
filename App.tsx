import React from 'react';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { withStyles } from '@ui-kitten/components';

import InflrApp from './app/App';

export default (props: any) => {
  let [fontsLoaded] = useFonts({
    'Jost-Black': require('./assets/fonts/Jost-Black.ttf'),
    'Jost-BlackItalic': require('./assets/fonts/Jost-BlackItalic.ttf'),
    'Jost-Bold': require('./assets/fonts/Jost-Bold.ttf'),
    'Jost-BoldItalic': require('./assets/fonts/Jost-BoldItalic.ttf'),
    'Jost-ExtraBold': require('./assets/fonts/Jost-ExtraBold.ttf'),
    'Jost-ExtraBoldItalic': require('./assets/fonts/Jost-ExtraBoldItalic.ttf'),
    'Jost-ExtraLight': require('./assets/fonts/Jost-ExtraLight.ttf'),
    'Jost-ExtraLightItalic': require('./assets/fonts/Jost-ExtraLightItalic.ttf'),
    'Jost-Italic': require('./assets/fonts/Jost-Italic.ttf'),
    'Jost-Light': require('./assets/fonts/Jost-Light.ttf'),
    'Jost-LightItalic': require('./assets/fonts/Jost-LightItalic.ttf'),
    'Jost-Medium': require('./assets/fonts/Jost-Medium.ttf'),
    'Jost-MediumItalic': require('./assets/fonts/Jost-MediumItalic.ttf'),
    'Jost-Regular': require('./assets/fonts/Jost-Regular.ttf'),
    'Jost-SemiBold': require('./assets/fonts/Jost-SemiBold.ttf'),
    'Jost-SemiBoldItalic': require('./assets/fonts/Jost-SemiBoldItalic.ttf'),
    'Jost-Thin': require('./assets/fonts/Jost-Thin.ttf'),
    'Jost-ThinItalic': require('./assets/fonts/Jost-ThinItalic.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  let StyledInflrApp = withStyles(InflrApp);
  return <StyledInflrApp />;
};