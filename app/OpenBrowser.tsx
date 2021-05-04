import { Linking } from 'react-native';

var openBrowser = (url: string) => {
  Linking.openURL(url).catch((err: any) => console.error("Couldn't load page", err));
};

export default openBrowser;