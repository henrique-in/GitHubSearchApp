import {IUser} from '@domain';
import {asyncStorage} from '@services';

import {UserApi} from '../../repositories/user';

const getUser = async (username: string) => {
  try {
    return await UserApi.getUser(username);
  } catch (error) {}
};

const saveUserData = async (userData: IUser[]) => {
  try {
    await asyncStorage.setItem('@GithubUsers:user', userData);
  } catch (error) {}
};

const removeUser = async (users: IUser[]) => {
  await asyncStorage.setItem('@GithubUsers:user', users);
};

export const UserServices = {
  getUser,
  saveUserData,
  removeUser,
};
