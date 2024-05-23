import React from 'react';
import {Image} from 'react-native';

interface Props {
  percentWidth: number;
}
export const LogoComponent = ({percentWidth = 1}: Props) => {
  return (
    <Image
      source={require('./appLogo.png')}
      style={{width: percentWidth}}
      resizeMode="contain"
    />
  );
};
