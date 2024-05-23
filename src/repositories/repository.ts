import {api} from '../api/config';
import {IRepositoryAPI} from '../domain/ListRepositories/RepositoryTypes';

const RepositoryApi = {
  getRepo: async (username: string) => {
    const {data} = await api.get<IRepositoryAPI>(`users/${username}/repos`);

    return data;
  },
};

export default RepositoryApi;
