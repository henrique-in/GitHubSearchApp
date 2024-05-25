import {StyleSheet} from 'react-native';

import {Responsive} from '@services';
import {colors} from '@theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginBottom: Responsive.heightScale(0.05),
  },
  content: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingTop: Responsive.heightScale(0.04),

    paddingHorizontal: Responsive.widthScale(0.09),
  },
  title: {
    color: colors.black,
    fontSize: Responsive.fontScale(22),
    fontWeight: 'bold',
    marginBottom: Responsive.heightScale(0.02),
  },
  subtitle: {
    color: colors.gray,
    fontSize: Responsive.fontScale(16),
    marginBottom: Responsive.heightScale(0.05),
  },
  inputContent: {
    marginBottom: 40,
  },
});
