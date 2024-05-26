import {IRepository, IUser} from '@domain';

export interface AuthUser {
  users: IUser[];
  saveData: (user: IUser, repo: IRepository[]) => void;
  isLoading: boolean;
  removeUser: (id: number) => Promise<boolean>;
  loadData: () => void;
  hasUsers: boolean;
}
