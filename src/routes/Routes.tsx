/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {LogoComponent} from '@brand';
import {useAppData} from '@hooks';
import {NavigationContainer} from '@react-navigation/native';
import {Responsive} from '@services';
import {colors} from '@theme';

import {AppStack} from './AppStack';

export const Routes = () => {
  const {isLoading} = useAppData();

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <LogoComponent width={Responsive.widthScale(0.5)} />

        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
