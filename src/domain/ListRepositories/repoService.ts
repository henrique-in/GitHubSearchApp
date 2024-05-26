import {IRepository} from '@domain';
import {asyncStorage} from '@services';

import {RepositoryApi} from '../../repositories';

const getRepo = async (username: string) => {
  try {
    return await RepositoryApi.getRepo(username);
  } catch (error) {
    throw new Error('Usuário não encontrado');
  }
};

const saveUserRepo = async (userId: number, repoData: IRepository[]) => {
  await asyncStorage.setItem(`${userId}`, repoData);
};

const loadRepo = async (userId: number): Promise<IRepository[]> => {
  const repo = await asyncStorage.getItem(`${userId}`);

  return repo;
};

const removeRepo = async (userId: number) => {
  await asyncStorage.removeItem(`${userId}`);
};

export const RepoService = {
  getRepo,
  saveUserRepo,
  loadRepo,
  removeRepo,
};
