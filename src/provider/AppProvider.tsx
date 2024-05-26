import React, {createContext, useEffect, useState} from 'react';

import {
  IRepository,
  IUser,
  RegisterServices,
  ListRepositoryService,
  UserServices,
} from '@domain';
import {asyncStorage} from '@services';

import {AuthUser} from './AppProviderTypes';

export const AppProviderContext = createContext<AuthUser>({} as AuthUser);

export function AppProvider({children}: React.PropsWithChildren<{}>) {
  const [users, setUsers] = useState<IUser[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    try {
      const userData = await asyncStorage.getItem('@GithubUsers:user');
      if (userData) {
        setUsers(userData);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (users.length === 0) {
      loadData();
    }
  }, [users]);

  const saveData = async (user: IUser, repo: IRepository[]) => {
    const allUser = [...users, user];

    await RegisterServices.saveUserData(user.id, {users: allUser, repo});
    setUsers(allUser);
  };

  const removeUser = async (id: number): Promise<boolean> => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
    Promise.all([
      await UserServices.removeUser(newUsers),
      await ListRepositoryService.removeRepo(id),
    ]);

    return newUsers.length === 0;
  };

  return (
    <AppProviderContext.Provider
      value={{
        isLoading,
        users: users,
        hasUsers: users.length > 0,
        saveData,
        removeUser,
        loadData,
      }}>
      {children}
    </AppProviderContext.Provider>
  );
}
