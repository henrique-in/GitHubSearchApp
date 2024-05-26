import React from 'react';

import {useAppData} from '@hooks';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListUsersScreen, RegisterScreen, RepositoryScreen} from '@screens';

export type RootStackParamList = {
  ListUsersScreen: undefined;
  RegisterScreen: undefined;
  RepositoryScreen: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppStack() {
  const {users} = useAppData();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={
        users.length > 0 ? 'ListUsersScreen' : 'RegisterScreen'
      }>
      <Stack.Screen name="ListUsersScreen" component={ListUsersScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="RepositoryScreen" component={RepositoryScreen} />
    </Stack.Navigator>
  );
}
