import {useContext} from 'react';

import {AppProviderContext, AuthUser} from '../provider';

export function useAppData(): AuthUser {
  const context = useContext(AppProviderContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
