import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  Text,
  View,
} from 'react-native';

import {Header, CardRepo} from '@components';
import {IRepository, useLoadRepo} from '@domain';
import {AppScreenProps} from '@routes';
import {colors} from '@theme';

import {styles} from './Repository.styles';

export const RepositoryScreen = ({
  route,
}: AppScreenProps<'RepositoryScreen'>) => {
  const {user} = route.params;

  const {isLoading, repositories} = useLoadRepo({userId: user.id});

  const renderItem = ({item}: ListRenderItemInfo<IRepository>) => {
    return <CardRepo repo={item} />;
  };

  return (
    <View style={styles.container}>
      <Header type="secondary" avatarUrl={user.avatar_url} />

      {/* {isLoading &&  ? (
          <View style={styles.loadingContent}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        ) :
        <View style={styles.content}>



        </View>
        }  */}

      <FlatList
        data={repositories}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{paddingHorizontal: 16}}
      />
    </View>
  );
};
