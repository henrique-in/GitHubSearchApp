import {StyleSheet} from 'react-native';

import {Responsive} from '@services';
import {colors} from '@theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackOpacity,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: colors.white,
    minHeight: Responsive.heightScale(0.5),

    width: '90%',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  title: {
    color: colors.black,
    fontSize: Responsive.fontScale(16),
    fontWeight: '700',
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  suggestedContent: {
    width: '100%',
    backgroundColor: colors.background,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 5,
  },
  subtitle: {
    color: colors.gray,
    fontSize: Responsive.fontScale(16),
    fontWeight: '400',
    marginBottom: 20,
  },
  cancelText: {
    fontSize: Responsive.fontScale(16),
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 20,
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
