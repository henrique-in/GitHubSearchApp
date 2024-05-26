import React from 'react';
import {View} from 'react-native';

import {Header} from '@components';
import {AppScreenProps} from '@routes';

export const RepositoryScreen = ({
  route,
}: AppScreenProps<'RepositoryScreen'>) => {
  const {user} = route.params;
  return (
    <View>
      <Header type="secondary" avatarUrl={user.avatar_url} />
    </View>
  );
};
