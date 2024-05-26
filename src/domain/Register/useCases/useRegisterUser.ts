import {useAppData} from '@hooks';
import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {RegisterServices} from '../registerService';
import {IRegister} from '../registerTypes';

export const useRegisterUser = (options?: MutationOptions<IRegister>) => {
  const {users, saveData} = useAppData();
  const mutation = useMutation<IRegister, Error, string>({
    mutationFn: (username: string) => RegisterServices.getUserData(username),
    onSuccess: data => {
      saveData(data.user, data.repo);
      options?.onSuccess?.(data);
    },
    onError: error => {
      options?.onError?.(error.message);
    },
  });

  const handleRegister = (username: string) => {
    const verifyUser = users.find(user => user.login === username);
    if (verifyUser) {
      throw new Error('Este usuário já existe');
    }

    mutation.mutate(username);
  };

  return {
    isLoading: mutation.isPending,
    handleRegisterUser: handleRegister,
  };
};
