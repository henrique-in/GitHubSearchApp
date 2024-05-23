import UserApi from '../../repositories/user';

const getUser = async (username: string) => {
  return await UserApi.getUser(username);
};

export const UserServices = {
  getUser,
};
