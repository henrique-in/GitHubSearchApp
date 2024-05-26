import React, {createContext, useEffect, useState} from 'react';

import {IRepository, IUser, RegisterServices} from '@domain';
import {asyncStorage} from '@services';

import {AuthUser} from './AppProviderTypes';

export const AppProviderContext = createContext<AuthUser>({} as AuthUser);

export function AppProvider({children}: React.PropsWithChildren<{}>) {
  const [users, setUsers] = useState<IUser[]>([]);
  const [repository, setRepository] = useState<IRepository[]>([]);

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
      console.log('users load');
      loadData();
    }
  }, []);

  const saveData = async (user: IUser, repo: IRepository[]) => {
    const allUser = [...users, user];
    setUsers(allUser);

    await RegisterServices.saveUserData(user.id, {users: allUser, repo});
  };

  return (
    <AppProviderContext.Provider
      value={{
        isLoading,
        repositorys: repository,
        users: users,
        saveData,
      }}>
      {children}
    </AppProviderContext.Provider>
  );
}
