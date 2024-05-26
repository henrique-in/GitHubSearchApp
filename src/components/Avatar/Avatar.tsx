import React from 'react';
import {Image} from 'react-native';

interface Props {
  url: string;
  size: number;
}

export const Avatar = ({url, size}: Props) => {
  return (
    <Image
      source={{uri: url}}
      style={{width: size, height: size, borderRadius: size}}
      resizeMode="cover"
    />
  );
};
