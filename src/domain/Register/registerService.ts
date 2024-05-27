import {IRepository, ListRepositoryService} from '@domain';

import {listRepoAdapter} from '../ListRepositories/listRepositoryAdapter';
import {userAdapter} from '../User/userAdapter';
import {UserServices} from '../User/userServices';
import {IUser} from '../User/UserTypes';

const getUserData = async (username: string) => {
  const userData = await UserServices.getUser(username);
  if (!userData) {
    throw new Error('Usuário informado não existe');
  }

  const repoData = await ListRepositoryService.getRepo(username);

  if (!repoData) {
    throw new Error('Este usuário não curtiu nenhum repositório');
  }

  return {
    user: userAdapter.toUser(userData, repoData.length),
    repo: listRepoAdapter.toRepo(repoData),
  };
};

const saveUserData = async (
  userId: number,
  data: {users: IUser[]; repo: IRepository[]},
) => {
  await UserServices.saveUserData(data.users);
  await ListRepositoryService.saveUserRepo(userId, data.repo);
};

export const RegisterServices = {
  getUserData,
  saveUserData,
};
