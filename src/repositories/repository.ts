import {api} from '@api';
import {IRepositoryAPI} from '@domain';

export const RepositoryApi = {
  getRepo: async (username: string) => {
    const {data} = await api.get<IRepositoryAPI[]>(`users/${username}/repos`);

    return data;
  },
};
