import {IRepository} from '@domain';

import {RepoService} from '../ListRepositories/repoService';
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

  const repoData = await RepoService.getRepo(username);

  if (!repoData) {
    throw new Error(
      'Não foi possivel encontrar um repositório para este usuário',
    );
  }

  const repoStars = repoData.filter(repo => repo.stargazers_count > 0);

  const getTotalStarCount = repoStars.reduce(
    (acc, repo) => acc + repo.stargazers_count,
    0,
  );
  return {
    user: userAdapter.toUser(userData, getTotalStarCount),
    repo: repoStars,
  };
};

const saveUserData = async (
  userId: number,
  data: {users: IUser[]; repo: IRepository[]},
) => {
  try {
    await UserServices.saveUserData(data.users);
    await RepoService.saveUserRepo(userId, data.repo);
  } catch (error) {}
};

export const RegisterServices = {
  getUserData,
  saveUserData,
};
