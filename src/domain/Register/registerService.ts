import {IRepository, ListRepositoryService} from '@domain';

import {listRepoAdapter} from '../ListRepositories/listRepositoryAdapter';
import {userAdapter} from '../User/userAdapter';
import {UserServices} from '../User/userServices';
import {IUser} from '../User/UserTypes';

const getUserData = async (username: string) => {
  const userData = await UserServices.getUser(username);
  if (!userData) {
    throw new Error(
      'Não foi possivel encontrar um usuário com o username informado',
    );
  }

  const repoData = await ListRepositoryService.getRepo(username);

  if (!repoData) {
    throw new Error(
      'Não foi possivel encontrar um repositório para este usuário',
    );
  }

  const repoStars = repoData.filter(repo => repo.stargazers_count > 0);

  if (repoStars.length === 0) {
    throw new Error('Este usuário não possui repositórios com estrelas');
  }

  const getTotalStarCount = repoStars.reduce(
    (acc, repo) => acc + repo.stargazers_count,
    0,
  );
  return {
    user: userAdapter.toUser(userData, getTotalStarCount),
    repo: listRepoAdapter.toRepo(repoStars),
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
