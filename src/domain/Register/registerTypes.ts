import {IRepository} from '../ListRepositories/RepositoryTypes';
import {IUser} from '../User/UserTypes';

export interface IRegister {
  user: IUser;
  repo: IRepository[];
}
