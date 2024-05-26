import React from 'react';

import {IUser} from '@domain';
import {useAppData} from '@hooks';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListUsersScreen, RegisterScreen, RepositoryScreen} from '@screens';

export type RootStackParamList = {
  ListUsersScreen: undefined;
  RegisterScreen: undefined;
  RepositoryScreen: {user: IUser};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppStack() {
  const {hasUsers} = useAppData();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={hasUsers ? 'ListUsersScreen' : 'RegisterScreen'}>
      <Stack.Screen name="ListUsersScreen" component={ListUsersScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="RepositoryScreen" component={RepositoryScreen} />
    </Stack.Navigator>
  );
}
