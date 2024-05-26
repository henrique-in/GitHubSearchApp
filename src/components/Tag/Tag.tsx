import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './Tag.styles';

interface Props {
  title: string;
}

export const Tag = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>#{title}</Text>
    </View>
  );
};
