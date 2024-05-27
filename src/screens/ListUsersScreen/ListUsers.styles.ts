import {StyleSheet} from 'react-native';

import {colors} from '@theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  list: {
    paddingBottom: 30,
    paddingHorizontal: 15,
  },
});
