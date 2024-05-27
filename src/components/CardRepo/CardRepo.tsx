import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {IRepository} from '@domain';
import {colors} from '@theme';

import {Icon} from '../Icon/Icon';
import {IconInfo} from '../IconInfo/IconInfo';
import {Tag} from '../Tag/Tag';

import {styles} from './CardRepo.style';

interface Props {
  repo: IRepository;
  handleEditTags?: () => void;
}

export const CardRepo = ({repo, handleEditTags}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContent}>
        <View style={styles.row}>
          <Text style={styles.title}>{repo.name}</Text>
          <Icon name="chevron-right" size={10} />
        </View>
        <View style={styles.starContent}>
          <Icon name="star" size={15} color={colors.yellow2} />
        </View>
      </View>
      {repo.description && (
        <Text style={styles.subtitle}>{repo.description}</Text>
      )}

      <View style={styles.tagsContainer}>
        {repo.tags.map((title, index) => (
          <Tag key={index} title={title} />
        ))}
        <TouchableOpacity style={styles.addTagContain} onPress={handleEditTags}>
          <Icon name="edit" size={10} color={colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <IconInfo icon={'language'} title={repo.language} />
        <IconInfo icon={'star'} title={String(repo.stargazers_count)} />
        <IconInfo icon={'user-account'} title={String(repo.watchers_count)} />
        <IconInfo icon={'time'} title={repo.created_at} />
      </View>
    </View>
  );
};
