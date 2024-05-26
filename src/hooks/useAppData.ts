import {useContext} from 'react';

import {AppProviderContext, AuthUser} from '../provider';

export function useAppData(): AuthUser {
  const context = useContext(AppProviderContext);

  if (!context) {
    throw new Error('useAppData must be used within an AppProvider');
  }
  return context;
}
