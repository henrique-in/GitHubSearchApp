import {dateUtils} from '@utils';

import {IRepository, IRepositoryAPI} from './listRepositoryTypes';

function toRepo(repo: IRepositoryAPI[]): IRepository[] {
  const payload = repo.map(repositoryApi => {
    return {
      id: repositoryApi.id,
      name: repositoryApi.name,
      description: repositoryApi.description,
      stargazers_count: repositoryApi.stargazers_count,
      language: repositoryApi.language,
      watchers_count: repositoryApi.watchers_count,
      created_at: dateUtils.formatRelative(repositoryApi.created_at),
      tags: [],
    } as IRepository;
  });

  return payload as IRepository[];
}

export const listRepoAdapter = {toRepo};
