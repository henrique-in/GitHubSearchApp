import React from 'react';
import {Text, TextInput, TextInputProps, View, ViewStyle} from 'react-native';

import {Icon, IconName} from '../Icon/Icon';

import {styles} from './Input.styles';

interface Props extends TextInputProps {
  iconName: IconName;
  colorIcon: string;
  containerStyle?: ViewStyle;
}

export const Input = ({
  iconName,
  containerStyle,
  colorIcon,
  ...rest
}: Props) => {
  return (
    <View style={{...styles.container, ...containerStyle}}>
      <View style={styles.iconContainer}>
        <Icon name={iconName} color={colorIcon} />
      </View>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
};
