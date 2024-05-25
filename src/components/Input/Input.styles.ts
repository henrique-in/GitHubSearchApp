import {StyleSheet} from 'react-native';

import {Responsive} from '@services';
import {colors} from '@theme';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.gray3,
    borderRadius: 5,
    height: Responsive.heightScale(0.05),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 5,
  },
  iconContainer: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
