import {Platform, StyleSheet} from 'react-native';

import {Responsive} from '@services';
import {colors} from '@theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingBottom: Platform.OS === 'android' ? 10 : 30,
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
  textFooter: {
    color: colors.gray,
    alignSelf: 'center',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    padding: Responsive.widthScale(0.09),
  },
});
