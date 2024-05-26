import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from './AppStack';
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
export type AppScreenProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;
