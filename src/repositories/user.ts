import {api} from '../api/config';
import {IUserAPI} from '../domain/User/UserTypes';

const UserApi = {
  getUser: async (username: string) => {
    const {data} = await api.get<IUserAPI>(`users/${username}`);

    return data;
  },
};

export default UserApi;
