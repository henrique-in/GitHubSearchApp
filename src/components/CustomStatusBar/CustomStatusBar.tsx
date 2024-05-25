import * as React from 'react';
import {View, StatusBar} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  backgroundColor: string;
  barStyle?: 'dark-content' | 'light-content';
}

export const CustomStatusBar = ({
  backgroundColor,
  barStyle = 'dark-content',
}: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar
        animated
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};
