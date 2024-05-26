import {useEffect, useState} from 'react';

import {ListRepositoryService} from '../listRepositoryService';
import {IRepository} from '../listRepositoryTypes';

interface Props {
  userId: number;
}
export const useLoadRepo = ({userId}: Props) => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    loadUserRepos();
  }, []);

  return {
    repositories,
    isLoading,
  };
};
