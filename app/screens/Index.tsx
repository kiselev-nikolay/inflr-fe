import React from 'react';
import { ContactsScreen } from './contacts/ContactsScreen';
import { MessagesScreen } from './messages/MessagesScreen';
import { RewardScreen } from './reward/RewardScreen';
import { SettingsScreen } from './settings/SettingsScreen';


let screens = new Map<number, any>();

screens.set(0, <RewardScreen />);
screens.set(1, <MessagesScreen />);
screens.set(2, <ContactsScreen />);
screens.set(3, <SettingsScreen />);

export default screens;