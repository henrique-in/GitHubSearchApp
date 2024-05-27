import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  ScrollView,
  View,
} from 'react-native';

import {Header, CardRepo, ModalTags, InputSearch, Tag} from '@components';
import {IRepository, useLoadRepo, useRepoTags} from '@domain';
import {AppScreenProps} from '@routes';
import {colors} from '@theme';

import {styles} from './Repository.styles';

export const RepositoryScreen = ({
  route,
}: AppScreenProps<'RepositoryScreen'>) => {
  const {user} = route.params;
  const [openModal, setOpenModal] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState<IRepository>(
    {} as IRepository,
  );

  const {
    isLoading,
    repositories,
    setText,
    text,
    filterTag,
    toogleTag,
    changeRepoTags,
  } = useLoadRepo({
    userId: user.id,
  });

  const {addTags, removeTag, tagList, suggestedModal, suggestedTags} =
    useRepoTags();

  const toogleModal = (item: IRepository) => {
    if (item) {
      setSelectedRepo(item);
    }
    setOpenModal(!openModal);
  };

  const renderItem = ({item}: ListRenderItemInfo<IRepository>) => {
    return <CardRepo repo={item} handleEditTags={() => toogleModal(item)} />;
  };

  return (
    <View style={styles.container}>
      <Header type="secondary" avatarUrl={user.avatar_url} />

      {isLoading && repositories.length === 0 ? (
        <View style={styles.loadingContent}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <View style={styles.content}>
          <InputSearch
            filterTag={filterTag}
            toogleTag={toogleTag}
            value={text}
            onChange={setText}
          />
          {filterTag && (
            <View style={styles.row}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {suggestedTags.map((tag, index) => (
                  <Tag
                    key={index}
                    title={tag}
                    handleAddTag={() => addTags(tag)}
                    handleRemoveTag={() => removeTag(tag)}
                    onPress={() => setText(tag)}
                  />
                ))}
                {text.length > 0 &&
                  !tagList.find(
                    tag => tag.toLocaleLowerCase() === text.toLocaleLowerCase(),
                  ) && <Tag title={text} handleAddTag={() => addTags(text)} />}
              </ScrollView>
            </View>
          )}

          <FlatList
            data={repositories}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
          />
        </View>
      )}
      <ModalTags
        item={selectedRepo}
        suggestedTagsModal={suggestedModal}
        isVisible={openModal}
        handleChangeRepoTags={changeRepoTags}
        onClose={() => toogleModal({} as IRepository)}
      />
    </View>
  );
};
