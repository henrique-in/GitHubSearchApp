import {StyleSheet} from 'react-native';

import {Responsive} from '@services';
import {colors} from '@theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    alignSelf: 'center',
  },
  title: {
    color: colors.white,
    fontSize: Responsive.fontScale(16),
    fontWeight: '400',
  },
});
