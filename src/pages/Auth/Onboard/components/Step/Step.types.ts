import { ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';

export interface IStepProps {
  children: ReactNode;
  item: {
    image: ImageSourcePropType;
    title: string;
    description: string;
    id: number;
  };
}
