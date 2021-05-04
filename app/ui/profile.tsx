import React from 'react';

import { Text } from '@ui-kitten/components';

import {
  Youtube,
  YoutubeData,
} from './youtube';

interface ProfileProps {
  profile: {
    about: string;
    availability: number;
    country: string;
    links: Array<any>;
    name: string;
    telegram: any;
    tiktok: any;
    youtube: any;
  };
}

export function Profile(props: ProfileProps) {
  return (<>
    {props.profile != null && props.profile.youtube != null && <>
      <Text style={{ marginBottom: 10 }}>Name: {props.profile.name}</Text>
      {Object.keys(props.profile.youtube).length > 0 && <Text style={{ marginBottom: 10 }}>Youtube:</Text>}
      {Object.entries(props.profile.youtube).map((i: [string, unknown]) => {
        let v = i[1] as YoutubeData;
        return (<Youtube key={v.imageUrl} data={v} />);
      })}
    </>}
  </>);
}