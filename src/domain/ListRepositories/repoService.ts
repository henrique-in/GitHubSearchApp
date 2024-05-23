import RepositoryApi from '../../repositories/repository';

const getRepo = async (username: string) => {
  return await RepositoryApi.getRepo(username);
};

export const RepoService = {
  getRepo,
};
