import {StyleSheet} from 'react-native';

import {Responsive} from '@services';
import {colors} from '@theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 24,
    elevation: 2,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentInfoUser: {
    marginLeft: 15,
    width: '60%',
  },
  title: {
    color: colors.black,
    fontSize: Responsive.fontScale(16),
    fontWeight: '700',
    marginRight: 10,
  },
  subtitle: {
    color: colors.black,
    fontSize: Responsive.fontScale(14),
    fontWeight: '400',
    marginTop: 10,
  },
  iconContent: {
    position: 'absolute',
    right: 0,
    top: Responsive.heightScale(0.015),
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.gray3,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});
