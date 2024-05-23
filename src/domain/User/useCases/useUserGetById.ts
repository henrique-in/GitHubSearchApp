import {useMutation} from '@tanstack/react-query';

import {UserServices} from '../userServices';

export const useUserGetById = () => {
  const mutation = useMutation({
    mutationFn: (username: string) => UserServices.getUser(username),
    onSuccess: user => {
      console.log(user);
    },
    onError: error => {
      console.log(error);
    },
  });

  return {
    user: mutation.data,
    isSuccess: mutation.isSuccess,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
};
