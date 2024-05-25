import React from 'react';
import {FlexAlignType, Image} from 'react-native';

interface Props {
  percentWidth: number;
  alignSelf?: FlexAlignType;
}
export const LogoComponent = ({
  percentWidth = 1,
  alignSelf = 'center',
}: Props) => {
  return (
    <Image
      source={require('./appLogo.png')}
      style={{width: percentWidth, alignSelf}}
      resizeMode="contain"
    />
  );
};
