import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import {Responsive} from '@services';

import {styles} from './Button.styles';

interface Props extends Omit<TouchableOpacityProps, 'disabled' | 'style'> {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  percentWidth?: number;
  height?: number;
}
export const Button = ({
  title,
  percentWidth = 100,
  height = 55,
  loading,
  disabled,

  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        ...styles.container,
        width: `${percentWidth}%`,
        height: Responsive.heightScale(height / 1000),
      }}
      disabled={disabled || loading}
      {...rest}>
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
