import {IRepository} from '../ListRepositories/listRepositoryTypes';
import {IUser} from '../User/UserTypes';

export interface IRegister {
  user: IUser;
  repo: IRepository[];
}
