import type { StackNavigationProp } from '@react-navigation/stack';
import type { IForm } from '@pages/Auth/Auth.types';
import type { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  login: undefined;
  onboard: undefined;
  register: undefined;
  userInfo: IForm | undefined;
};

export interface IAuthScreen {
  navigation: AuthStack;
  route: RouteProp<{ params: IForm }, 'params'>;
}

export interface IAuthRoutes {
  name: keyof RootStackParamList;
  component: ({ navigation, route }: IAuthScreen) => unknown;
}

export type AuthStack = StackNavigationProp<RootStackParamList>;
