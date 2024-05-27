import {StyleSheet} from 'react-native';

import {colors} from '@theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    height: 40,
    elevation: 2,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 4,
  },
  input: {
    marginLeft: 10,
    color: colors.black,
    width: '75%',
  },
  buttonSelect: {
    backgroundColor: colors.background,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 2,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 4,
  },
});
