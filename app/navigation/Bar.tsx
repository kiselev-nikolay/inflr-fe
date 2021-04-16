import React from 'react';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { findScreen } from './findScreen';

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

interface NavigationProps { }
interface NavigationState {
  selectedIndex: number;
}

export class Navigation extends React.Component<NavigationProps, NavigationState> {
  constructor(props: NavigationProps) {
    super(props);
    this.state = { selectedIndex: 0 };
  }
  setSelectedIndex = (index: number) => {
    this.setState({ selectedIndex: index });
  };
  render() {
    return (<>
      {findScreen(this.state.selectedIndex)}
      <BottomNavigation
        selectedIndex={this.state.selectedIndex}
        onSelect={index => this.setSelectedIndex(index)}>
        <BottomNavigationTab title='Rewards' icon={AwardIcon} />
        <BottomNavigationTab title='Messages' icon={MessageIcon} />
        <BottomNavigationTab title='Contacts' icon={PeopleIcon} />
        <BottomNavigationTab title='Settings' icon={CogIcon} />
      </BottomNavigation>
    </>
    );
  }
}