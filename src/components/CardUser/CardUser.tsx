import React from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';

import {IUser} from '@domain';
import {Responsive} from '@services';
import {colors} from '@theme';

import {Avatar} from '../Avatar/Avatar';
import {Icon} from '../Icon/Icon';
import {IconInfo} from '../IconInfo/IconInfo';

import {styles} from './CardUser.styles';

interface Props {
  user: IUser;
  handleDelete: () => void;
  handleOpenRepo: () => void;
}

export const CardUser = ({user, handleDelete, handleOpenRepo}: Props) => {
  return (
    <Pressable onPress={handleOpenRepo}>
      <View style={styles.container}>
        <View style={styles.rowContent}>
          <View style={styles.row}>
            <Avatar url={user.avatar_url} size={Responsive.widthScale(0.22)} />
            <View style={styles.contentInfoUser}>
              <View style={styles.row}>
                <Text style={styles.title}>{user.name}</Text>
                <Icon name="chevron-right" size={10} />
              </View>

              <Text style={styles.subtitle}>@{user.login}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.iconContent}
            onPress={() => handleDelete()}>
            <Icon name="trash" size={15} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          {user.company && <IconInfo icon="business" title={user?.company} />}

          {user.location && (
            <IconInfo icon="place" size={10} title={user?.location} />
          )}

          <IconInfo icon="star" title={String(user?.starred_total)} />
        </View>
      </View>
    </Pressable>
  );
};
