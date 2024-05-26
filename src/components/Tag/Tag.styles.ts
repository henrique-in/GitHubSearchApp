import {StyleSheet} from 'react-native';

import {Responsive} from '@services';
import {colors} from '@theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray5,
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginRight: 5,
  },
  title: {
    fontSize: Responsive.fontScale(12),
    fontWeight: '400',
    color: colors.black,
  },
});
