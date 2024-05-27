import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {colors} from '@theme';

import {Icon} from '../Icon/Icon';

import {styles} from './Tag.styles';

interface Props {
  title: string;
  onPress?: () => void;
  handleAddTag?: () => void;
  handleRemoveTag?: () => void;
}

export const Tag = ({title, onPress, handleAddTag, handleRemoveTag}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} disabled={!onPress} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>#{title}</Text>
        {(handleAddTag || handleRemoveTag) && (
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: handleRemoveTag ? colors.primary : colors.white,
            }}
            onPress={() =>
              handleRemoveTag ? handleRemoveTag() : handleAddTag?.()
            }>
            <Icon
              name={handleRemoveTag ? 'close' : 'plus'}
              size={8}
              color={handleRemoveTag ? colors.white : colors.black}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};
