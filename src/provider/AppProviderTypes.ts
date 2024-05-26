import {IRepository, IUser} from '@domain';

export interface AuthUser {
  users: IUser[];
  repositorys: IRepository[];
  saveData: (user: IUser, repo: IRepository[]) => void;
  isLoading: boolean;
}
