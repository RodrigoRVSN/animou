import type { StackNavigationProp } from '@react-navigation/stack';
import { ComponentType } from 'react';

export type RootStackParamList = {
  home: undefined;
};

export interface IAppScreen {
  navigation: AppStack;
}

export interface IAppRoutes {
  name: keyof RootStackParamList;
  component: ComponentType;
}

export type AppStack = StackNavigationProp<RootStackParamList>;
