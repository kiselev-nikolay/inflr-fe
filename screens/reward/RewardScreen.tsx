import React from 'react';
import { Text, Button, Card } from '@ui-kitten/components';
import { AppScreen } from '../AppScreen';

export class RewardScreen extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <AppScreen title="Rewards">
        <Card>
          <Text style={{ marginBottom: 10 }} category='h1'>
            Patrick J. Joyce
          </Text>
          <Text style={{ marginBottom: 10 }}>
            Democratic member of the Illinois Senate from the 40th district
            since November 8, 2019. The 40th district, located partly in the
            Chicagoland area, includes all or parts of Bourbonnais, Bradley,
            Chicago Heights, Coal City, Essex, Flossmoor, Frankfort, Glenwood,
            Hazel Crest, Homewood, Joliet, Kankakee, Manhattan, Matteson,
            Mokena, Monee, New Lenox, Park Forest, Richton Park, Steger,
            University Park, and Wilmington.
          </Text>
          <Button onPress={() => { }}>
            Useless button
          </Button>
        </Card>
      </AppScreen>
    );
  }
}