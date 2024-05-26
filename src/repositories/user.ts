import {api} from '@api';
import {IUserAPI} from '@domain';

export const UserApi = {
  getUser: async (username: string) => {
    const {data} = await api.get<IUserAPI>(`users/${username}`);

    return data;
  },
};
