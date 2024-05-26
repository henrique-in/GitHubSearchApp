import React from 'react';
import {FlexAlignType, Image} from 'react-native';

import {Responsive} from '@services';

interface Props {
  width?: number;
  alignSelf?: FlexAlignType;
}
export const LogoComponent = ({
  width = Responsive.widthScale(0.5),
  alignSelf = 'center',
}: Props) => {
  return (
    <Image
      source={require('./appLogo.png')}
      style={{width: width, alignSelf}}
      resizeMode="contain"
    />
  );
};
