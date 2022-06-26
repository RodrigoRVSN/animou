import type { StackNavigationProp } from '@react-navigation/stack';
import type { ComponentType } from 'react';

export type RootStackParamList = {
  login: undefined;
  onboard: undefined;
  register: undefined;
};

export interface IAuthRoutes {
  name: keyof RootStackParamList;
  component: ComponentType;
}

export type AuthStack = StackNavigationProp<RootStackParamList>;
