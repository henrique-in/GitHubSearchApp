import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';

import {colors} from '@theme';

import {Icon} from '../Icon/Icon';

import {styles} from './InputSearch.styles';

interface Props {
  value: string;
  onChange: (text: string) => void;
  filterTag: boolean;
  toogleTag: () => void;
}

export const InputSearch = ({onChange, value, filterTag, toogleTag}: Props) => {
  return (
    <View style={styles.container}>
      {filterTag && (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={toogleTag}
          style={styles.buttonSelect}>
          <Icon name="search" />
        </TouchableOpacity>
      )}
      <View style={styles.inputContainer}>
        <Icon name={filterTag ? 'filter' : 'search'} />
        <TextInput
          placeholder={'Buscar um repositório...'}
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          style={styles.input}
          value={value}
          onChangeText={text => onChange(text)}
        />
      </View>
      {!filterTag && (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={toogleTag}
          style={styles.buttonSelect}>
          <Icon name="filter" />
        </TouchableOpacity>
      )}
    </View>
  );
};
