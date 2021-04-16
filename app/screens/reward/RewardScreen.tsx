import React from 'react';

import {
  Button,
  Card,
  Text,
} from '@ui-kitten/components';

export class RewardScreen extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
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
    );
  }
}