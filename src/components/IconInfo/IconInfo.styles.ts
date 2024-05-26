import {StyleSheet} from 'react-native';

import {Responsive} from '@services';
import {colors} from '@theme';

export const styles = StyleSheet.create({
  container: {
    maxWidth: Responsive.widthScale(0.29),

    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    color: colors.gray,
    fontSize: Responsive.fontScale(12),
    fontWeight: '400',
    marginLeft: 5,
  },
});
