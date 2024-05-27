import {IRepository} from '@domain';
import {asyncStorage} from '@services';
import {orderRepoByName} from '@utils';

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
  const repo: IRepository[] = await asyncStorage.getItem(`${userId}`);

  return orderRepoByName(repo);
};

const removeRepo = async (userId: number) => {
  return await asyncStorage.removeItem(`${userId}`);
};

const getTags = async () => {
  return await asyncStorage.getItem('@GithubUsers:tags');
};

const saveTags = async (tags: string[]) => {
  return await asyncStorage.setItem('@GithubUsers:tags', tags);
};

export const ListRepositoryService = {
  getRepo,
  saveUserRepo,
  loadRepo,
  removeRepo,
  getTags,
  saveTags,
};
