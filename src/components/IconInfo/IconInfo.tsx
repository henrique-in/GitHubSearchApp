import React from 'react';
import {Text, View} from 'react-native';

import {colors} from '@theme';

import {Icon, IconName} from '../Icon/Icon';

import {styles} from './IconInfo.styles';

interface Props {
  icon: IconName;
  title: string;
  size?: number;
}

export const IconInfo = ({icon, title, size = 15}: Props) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={size} color={colors.gray3} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
