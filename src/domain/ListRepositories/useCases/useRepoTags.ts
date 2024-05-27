import {useEffect, useState, useMemo} from 'react';

import {suggestionsTagsDataBase} from '@infra';

import {ListRepositoryService} from '../listRepositoryService';

export const useRepoTags = () => {
  const [tags, setTags] = useState<string[]>([]);
  const loadTags = async () => {
    const data: string[] = await ListRepositoryService.getTags();
    if (!data) {
      await ListRepositoryService.saveTags(suggestionsTagsDataBase);

      return setTags(suggestionsTagsDataBase);
    }

    setTags(data);
  };

  const removeTag = async (tag: string) => {
    const tagFilter = tags.filter(t => t !== tag);
    setTags(tagFilter);
    return await ListRepositoryService.saveTags(tagFilter);
  };

  const addTags = async (tag: string) => {
    const tagFilter = [...tags, tag];
    setTags(tagFilter);
    return await ListRepositoryService.saveTags(tagFilter);
  };

  const getRandomTags = (tagsSearch: string[], count: number): string[] => {
    for (let i = tagsSearch.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tagsSearch[i], tagsSearch[j]] = [tagsSearch[j], tagsSearch[i]];
    }

    return tagsSearch.slice(0, count);
  };

  useEffect(() => {
    loadTags();
  }, []);

  const suggestedTags = useMemo(() => getRandomTags(tags, 2), [tags]);
  const suggestedModal = useMemo(() => getRandomTags(tags, 6), [tags]);

  return {
    loadTags,
    removeTag,
    addTags,
    tagList: tags,
    suggestedTags,
    suggestedModal,
  };
};
