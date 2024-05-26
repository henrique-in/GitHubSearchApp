import {IUser, IUserAPI} from './UserTypes';

function toUser(user: IUserAPI, starred_total: number): IUser {
  return {
    id: user.id,
    login: user.login,
    name: user.name,
    avatar_url: user.avatar_url,
    company: user.company,
    blog: user.blog,
    location: user.location,
    starred_total,
  };
}

export const userAdapter = {toUser};
