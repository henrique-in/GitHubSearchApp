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
    marginVertical: 10,
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
  starContent: {
    backgroundColor: colors.yellowOpacity,
    padding: 5,
    borderRadius: 20,
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  addTagContain: {
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 20,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
