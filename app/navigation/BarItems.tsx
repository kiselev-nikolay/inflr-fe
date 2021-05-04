import React from 'react';

import {
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

const PersonIcon = (props: any) => (
  <Icon {...props} name='person-outline' />
);

const CogIcon = (props: any) => (
  <Icon {...props} name='settings-outline' />
);

const MessageIcon = (props: any) => (
  <Icon {...props} name='message-circle-outline' />
);

const InboxIcon = (props: any) => (
  <Icon {...props} name='inbox-outline' />
);

export const appNavigationBarItems = [
  (<BottomNavigationTab key={0} title='Inbox' icon={InboxIcon} />),
  (<BottomNavigationTab key={1} title='Messages' icon={MessageIcon} />),
  (<BottomNavigationTab key={2} title='Profile' icon={PersonIcon} />),
  (<BottomNavigationTab key={3} title='Settings' icon={CogIcon} />),
];