import {useEffect, useState} from 'react';

import {ListRepositoryService} from '../listRepositoryService';

export const useRepoTags = () => {
  const [tags, setTags] = useState<string[]>([]);
  const loadTags = async () => {
    const data: string[] = await ListRepositoryService.getTags();
    if (data) {
      setTags(data);
    }
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

  const getRandomTags = (tags: string[], count: number): string[] => {
    for (let i = tags.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tags[i], tags[j]] = [tags[j], tags[i]];
    }

    return tags.slice(0, count);
  };

  useEffect(() => {
    loadTags();
  }, []);

  return {
    loadTags,
    removeTag,
    addTags,
    tagList: tags,
    suggestedTags: getRandomTags(tags, 3),
    suggestedModal: getRandomTags(tags, 6),
  };
};
