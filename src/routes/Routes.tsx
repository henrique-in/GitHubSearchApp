/* eslint-disable react/react-in-jsx-scope */
import {ActivityIndicator, View} from 'react-native';

import {LogoComponent} from '@brand';
import {useAppData} from '@hooks';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from '@theme';

import {AppStack} from './AppStack';

export const Routes = () => {
  const {isLoading} = useAppData();

  if (isLoading) {
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LogoComponent alignSelf="center" />
      <ActivityIndicator size="large" color={colors.primary} />
    </View>;
  }

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
