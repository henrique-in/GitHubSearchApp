/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';

import {orderRepoByName} from '@utils';

import {ListRepositoryService} from '../listRepositoryService';
import {IRepository} from '../listRepositoryTypes';

interface Props {
  userId: number;
}
export const useLoadRepo = ({userId}: Props) => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [filteredRepositories, setFilteredRepositories] = useState<
    IRepository[]
  >([]);

  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('');
  const [filterTag, setFilterTag] = useState(false);

  const toogleTag = () => setFilterTag(!filterTag);

  const loadUserRepos = async () => {
    setIsLoading(true);
    try {
      const repo = await ListRepositoryService.loadRepo(userId);
      if (repo) {
        setRepositories(repo);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const changeRepoTags = async (repo: IRepository) => {
    const filterRepo = repositories.filter(r => r.id !== repo.id);
    const tagFilter = [...filterRepo, repo];

    setRepositories(orderRepoByName(tagFilter));
    return await ListRepositoryService.saveUserRepo(userId, tagFilter);
  };

  const searchRepo = () => {
    if (text.length > 0) {
      return filterTag ? searchByTag() : searchByText();
    }

    if (text.length === 0) {
      return setFilteredRepositories(repositories);
    }
  };
  const searchByTag = () => {
    return setFilteredRepositories(
      repositories.filter(
        item =>
          item.tags &&
          item.tags.some(
            t => t?.toLocaleLowerCase() === text.toLocaleLowerCase(),
          ),
      ),
    );
  };
  const searchByText = () => {
    return setFilteredRepositories(
      repositories.filter(repo =>
        repo.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()),
      ),
    );
  };

  useEffect(() => {
    loadUserRepos();
  }, []);

  useEffect(() => {
    searchRepo();
  }, [text, repositories]);

  return {
    repositories: filteredRepositories,
    isLoading,
    text,
    setText,
    toogleTag,
    filterTag,
    changeRepoTags,
  };
};
