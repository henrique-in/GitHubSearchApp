import {StyleSheet} from 'react-native';

import {Responsive} from '@services';
import {colors} from '@theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray5,
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginRight: 5,
    marginBottom: 5,
    flexWrap: 'wrap',
  },
  title: {
    fontSize: Responsive.fontScale(12),
    fontWeight: '400',
    color: colors.black,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginLeft: 9,
    zIndex: 1,
  },
  scrollContent: {
    minWidth: 100,
  },
});
