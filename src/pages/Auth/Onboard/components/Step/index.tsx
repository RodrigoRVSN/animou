import { useWindowDimensions } from 'react-native';
import { IStepProps } from './Step.types';
import * as S from './styles';

export const Step = ({ item, children }: IStepProps) => {
  const { width } = useWindowDimensions();

  return (
    <S.Container style={{ width }}>
      <S.Picture source={item.image} resizeMode="contain" />

      {children}

      <S.Title>{item.title}</S.Title>
      <S.Description>{item.description}</S.Description>
    </S.Container>
  );
};
