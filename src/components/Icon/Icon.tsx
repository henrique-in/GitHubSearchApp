import React from 'react';
import {Pressable} from 'react-native';

import {
  AccountCircleIcon,
  ChevronRightIcon,
  BusinessIcon,
  PlaceIcon,
  StartIcon,
  TrashIcon,
  ArrowLeftIcon,
  UserAccountIcon,
  LanguageIcon,
  TimeIcon,
  EditIcon,
  SearchIcon,
  FilterIcon,
  CloseIcon,
  PlusIcon,
} from '../../assets';

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
  'account-circle': AccountCircleIcon,
  business: BusinessIcon,
  star: StartIcon,
  place: PlaceIcon,
  'chevron-right': ChevronRightIcon,
  trash: TrashIcon,
  'arrow-left': ArrowLeftIcon,
  'user-account': UserAccountIcon,
  language: LanguageIcon,
  time: TimeIcon,
  plus: PlusIcon,
  edit: EditIcon,
  search: SearchIcon,
  filter: FilterIcon,
  close: CloseIcon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
