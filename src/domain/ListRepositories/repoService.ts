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
  try {
    await asyncStorage.setItem(`${userId}`, repoData);
  } catch (error) {}
};

export const RepoService = {
  getRepo,
  saveUserRepo,
};
