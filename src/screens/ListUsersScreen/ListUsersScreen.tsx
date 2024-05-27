import React from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';

import {CardUser, Header} from '@components';
import {IUser} from '@domain';
import {useAppData} from '@hooks';
import {CommonActions} from '@react-navigation/native';
import {AppScreenProps} from '@routes';

import {styles} from './ListUsers.styles';

export const ListUsersScreen = ({
  navigation,
}: AppScreenProps<'ListUsersScreen'>) => {
  const {users, removeUser} = useAppData();

  const renderItem = ({item}: ListRenderItemInfo<IUser>) => {
    return (
      <CardUser
        user={item}
        handleOpenRepo={() => {
          navigation.navigate('RepositoryScreen', {user: item});
        }}
        handleDelete={() => {
          removeUser(item.id).then(hasNotUsers => {
            if (hasNotUsers) {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: 'RegisterScreen'}],
                }),
              );
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header type="primary" />
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};
