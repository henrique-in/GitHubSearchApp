import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {Button, Tag} from '@components';
import {IRepository} from '@domain';
import {colors} from '@theme';
import {shadowStyles} from '@theme';

import {Input} from '../Input/Input';

import {styles} from './ModalTags.styles';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  item: IRepository;
  suggestedTagsModal: string[];
  handleChangeRepoTags: (item: IRepository) => void;
}

export const ModalTags = ({
  isVisible,
  onClose,
  item,
  suggestedTagsModal,
  handleChangeRepoTags,
}: Props) => {
  const [text, setText] = useState('');
  const [repoTags, setRepoTags] = useState<string[]>([]);
  const [sugggestedTags, setSuggestedTags] = useState<string[]>([]);

  const removeTag = async (tag: string) => {
    const tagFilter = repoTags.filter(t => t !== tag);
    return setRepoTags(tagFilter);
  };

  const selectTag = (tag: string) => {
    if (repoTags.includes(tag)) {
      return;
    }
    setRepoTags(prev => [...prev, tag]);
  };

  const addRepoTags = async () => {
    handleChangeRepoTags({
      ...item,
      tags: text ? [...repoTags, text] : repoTags,
    });
    setText('');
    setRepoTags([]);
    onClose();
  };

  useEffect(() => {
    if (isVisible) {
      setSuggestedTags(suggestedTagsModal);
      if (item?.tags?.length > 0) {
        setRepoTags(item?.tags);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const hasTags = item?.tags?.length > 0;

  return (
    <Modal
      animationType="fade"
      visible={isVisible}
      presentationStyle="overFullScreen">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.title}>
                {hasTags ? 'Editar tags' : 'Adicionar tags'}
              </Text>
              <Input
                iconName="search"
                colorIcon={colors.gray}
                value={text}
                onChangeText={setText}
              />
              {repoTags?.length > 0 && (
                <View style={styles.tagsContainer}>
                  {repoTags?.map((title, index) => (
                    <Tag
                      key={index}
                      title={title}
                      handleRemoveTag={() => removeTag(title)}
                    />
                  ))}
                </View>
              )}

              <View
                style={[
                  styles.suggestedContent,
                  item?.tags?.length > 0 ? undefined : shadowStyles,
                ]}>
                <Text style={styles.subtitle}>Sugestões</Text>

                <View style={styles.tagsContainer}>
                  {sugggestedTags?.map((title, index) => (
                    <Tag
                      key={index}
                      title={title}
                      handleAddTag={() => selectTag(title)}
                    />
                  ))}
                </View>
              </View>
              <View style={styles.buttonsContainer}>
                <Button
                  title="Salvar"
                  percentWidth={100}
                  onPress={addRepoTags}
                />
                <TouchableOpacity onPress={onClose}>
                  <Text
                    style={{
                      ...styles.cancelText,
                      color: hasTags ? colors.primary : colors.black,
                    }}>
                    Cancelar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
