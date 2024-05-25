import React from 'react';
import {Pressable} from 'react-native';

import {AccountCircle} from '../../assets/icons/AccountCircle';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: string;
  size?: number;
  onPress?: () => void;
}

export function Icon({name, size, color = 'black', onPress}: IconProps) {
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable testID={name} hitSlop={10} onPress={onPress}>
        <SVGIcon size={size} color={color} />
      </Pressable>
    );
  }
  return <SVGIcon size={size} color={color} />;
}

const iconRegistry = {
  'account-circle': AccountCircle,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
