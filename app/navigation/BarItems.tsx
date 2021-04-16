import React from 'react';
import { BottomNavigationTab, Icon } from '@ui-kitten/components';

const PeopleIcon = (props: any) => (
  <Icon {...props} name='people-outline' />
);

const CogIcon = (props: any) => (
  <Icon {...props} name='settings-outline' />
);

const MessageIcon = (props: any) => (
  <Icon {...props} name='message-circle-outline' />
);

const AwardIcon = (props: any) => (
  <Icon {...props} name='award-outline' />
);

export const appNavigationBarItems = [
  (<BottomNavigationTab key={0} title='Rewards' icon={AwardIcon} />),
  (<BottomNavigationTab key={1} title='Messages' icon={MessageIcon} />),
  (<BottomNavigationTab key={2} title='Contacts' icon={PeopleIcon} />),
  (<BottomNavigationTab key={3} title='Settings' icon={CogIcon} />),
];